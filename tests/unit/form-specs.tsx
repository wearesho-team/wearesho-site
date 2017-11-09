import * as React from "react";
import {expect} from "chai";
import axios from "axios";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";
import {Form, FormContext, Model} from "react-context-form";

import {ContactForm} from "../../src/components/Pages/PartnershipPage/ContactForm/ContactForm";
import {ContactFormModel} from "../../src/models/ContactFormModel";
import {ValidationError} from "../../src/data/ValidationError";
import {ContactFormState} from "../../src/components/Pages/PartnershipPage/ContactForm/ContactFormState";
import {SubmitStatus} from "../../src/components/Pages/PartnershipPage/ContactForm/SubmitStatus";

describe("<Form/>", () => {
    let wrapper: ReactWrapper<any, ContactFormState>;
    let timer: SinonFakeTimers;

    beforeEach(() => {
        wrapper = mount(<ContactForm/>);
        timer = useFakeTimers();
    });

    afterEach(() => {
        timer.restore();
        wrapper.unmount();
    });

    it("Should add errors on submit when fields filled wrong", async () => {
        const form = wrapper.find(Form).instance() as Form<Model>;
        const model = form.state.model as ContactFormModel;

        model.name = undefined;
        model.phone = undefined;
        model.from = undefined;
        model.to = undefined;
        model.groups();

        await form.handleSubmit();

        expect(model.hasErrors()).to.be.true;

        model.name = "_";
        model.phone = "0";
        model.from = "25:00";
        model.to = "12:60";

        await form.handleSubmit();

        expect(model.hasErrors()).to.be.true;
    });

    it("Should add errors from server on submit when fields filled wrong (if front validation incorrect)", async () => {
        axios.defaults.baseURL = "/";

        let interceptor = axios.interceptors.response.use(
            undefined,
            () => {
                throw new ValidationError([
                    {
                        attribute: "phone",
                        details: "details"
                    },
                    {
                        attribute: "from",
                        details: "details"
                    },
                    {
                        attribute: "name",
                        details: "details"
                    }
                ])
            }
        );

        // tslint:disable:no-object-literal-type-assertion
        const model = {
            attributes: () => ["phone", "name", "from", "to"],
            name: "",
            phone: "",
            from: "",
            to: ""
        } as ContactFormModel;

        let addErrorTriggered = false;
        let focusTriggered = false;

        const input = document.createElement("input");
        input.focus = () => focusTriggered = true;

        const context: FormContext = {
            addError: () => {
                addErrorTriggered = true;
            },
            getDOMElement: () => input,
            values: undefined,
            getError: undefined,
            onChange: undefined,
            onMount: undefined,
            onUnmount: undefined,
            validate: undefined,
            isLoading: false,
        };

        await (wrapper.instance() as any).handleSubmit(model, context);
        expect(focusTriggered).to.be.true;
        expect(addErrorTriggered).to.be.true;

        expect(wrapper.instance().state.status).to.equal(SubmitStatus.standBy);

        axios.interceptors.request.eject(interceptor);
    });

    it("Should show success message on success submit", async () => {
        axios.defaults.baseURL = "/";

        let interceptor = axios.interceptors.response.use(
            undefined,
            () => undefined
        );

        // tslint:disable:no-object-literal-type-assertion
        const model = {
            attributes: () => ["phone", "name", "from", "to"],
            name: "",
            phone: "",
            from: "",
            to: ""
        } as ContactFormModel;

        await (wrapper.instance() as any).handleSubmit(model, undefined);
        expect(wrapper.instance().state.status).to.equal(SubmitStatus.success);

        axios.interceptors.request.eject(interceptor);
    });

    it("Should show error message on fail submit", async () => {
        axios.defaults.baseURL = "/";

        let interceptor = axios.interceptors.response.use(
            (data) => {
                throw new Error("test error");
            },
            undefined
        );

        // tslint:disable:no-object-literal-type-assertion
        const model = {
            attributes: () => ["phone", "name", "from", "to"],
            name: "",
            phone: "",
            from: "",
            to: ""
        } as ContactFormModel;

        await (wrapper.instance() as any).handleSubmit(model, undefined);
        expect(wrapper.instance().state.status).to.equal(SubmitStatus.fail);

        axios.interceptors.request.eject(interceptor);
    });

    it("Should set `standBy` state after timeout on success/fail submit", async () => {
        wrapper.setState({
            status: SubmitStatus.fail,
            data: {
                name: ""
            }
        });

        timer.tick(ContactForm.standByDelay / 2);
        expect(wrapper.state().status).to.equal(SubmitStatus.fail);

        timer.tick(ContactForm.standByDelay / 2);
        expect(wrapper.state().status).to.equal(SubmitStatus.standBy);

        wrapper.setState({
            status: SubmitStatus.success,
            data: {
                name: "",
                from: "",
                to: ""
            }
        });

        timer.tick(ContactForm.standByDelay / 2);
        expect(wrapper.state().status).to.equal(SubmitStatus.success);

        timer.tick(ContactForm.standByDelay / 2);
        expect(wrapper.state().status).to.equal(SubmitStatus.standBy);
    });
});
