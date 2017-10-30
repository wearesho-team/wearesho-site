import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {Form, FormContext, Model} from "react-context-form";

import {ContactForm} from "../../src/components/ContactPage/ContactForm";
import {ContactFormModel} from "../../src/models/ContactFormModel";

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
        // tslint:disable:no-object-literal-type-assertion
        const model = {
            attributes: () => ["phone", "mail", "name", "from", "to"],
            name: "_",
            mail: "_",
            phone: "0",
            from: "25:00",
            to: "15:60"
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
        // await (wrapper.instance() as any).handleSubmit(model, context);
        // expect(focusTriggered).to.be.true;
        // expect(addErrorTriggered).to.be.true;
    })
});
