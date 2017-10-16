import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {ContactForm} from "../../src/components/ContactPage/ContactForm";
import {instantiateContactFormModel} from "../../src/models/ContactFormModel";

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

    it("Should be error on submit when fields filled wrong", async () => {
        const model = instantiateContactFormModel();
        // temporary coverage improve
        model.groups();
        model.to = model.from = undefined;

        expect((await model.validate()).length).to.equal(model.attributes().length);

        model.from = "1";
        model.to = "1";
        model.name = "1";
        model.phone = "1";
        model.mail = "1";

        expect((await model.validate()).length).to.equal(model.attributes().length);
    })
});
