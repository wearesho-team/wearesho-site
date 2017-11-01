import * as React from "react";
import {expect} from "chai";
import axios from "axios";
import {ReactWrapper, mount} from "enzyme";
import {Form, FormContext, Model} from "react-context-form";

import {ContactForm} from "../../src/components/Pages/PartnershipPage/ContactForm/ContactForm";
import {ContactFormModel} from "../../src/models/ContactFormModel";
import {ValidationError} from "../../src/data/ValidationError";

describe("<Form/>", () => {
    let wrapper: ReactWrapper<any, any>;

    beforeEach(() => {
        wrapper = mount(<ContactForm/>);
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should prevent default on submit", () => {
        let isDefaultPrevented = false;

        wrapper.simulate("submit", {
            preventDefault: () => {
                isDefaultPrevented = true;
            }
        });

        expect(isDefaultPrevented).to.be.true;
    });

    it("Should add errors on submit when fields filled wrong", async () => {
        const form = wrapper.children().instance() as Form<Model>;
        const model = form.state.model as ContactFormModel;

        model.name = undefined;
        model.mail = undefined;
        model.phone = undefined;
        model.from = undefined;
        model.to = undefined;
        model.groups();

        await form.handleSubmit();

        expect(model.hasErrors()).to.be.true;

        model.name = "_";
        model.mail = "_";
        model.phone = "0";
        model.from = "25:00";
        model.to = "12:60";

        await form.handleSubmit();

        expect(model.hasErrors()).to.be.true;
    });

    it("Should add errors from server on submit when fields filled wrong (if front validation incorrect)", async () => {
        axios.defaults.baseURL = "/";

        axios.interceptors.response.use(
            undefined,
            () => {
                throw new ValidationError([
                    {
                        attribute: "phone",
                        details: "details"
                    },
                    {
                        attribute: "mail",
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
            attributes: () => ["phone", "mail", "name", "from", "to"],
            name: "",
            mail: "",
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

        // connect o backend
        await (wrapper.instance() as any).handleSubmit(model, context);
        expect(focusTriggered).to.be.true;
        expect(addErrorTriggered).to.be.true;
    })
});
