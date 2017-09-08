import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {Form} from "../../src/components/ContactPage/Form";

describe("<Form/>", () => {
    let wrapper: ReactWrapper<any, any>;
    let node: any;

    const recaptcha = document.createElement("DIV");
    const wrap = document.createElement("DIV");

    const frame = document.createElement("IFRAME");
    frame.setAttribute("title", "test recaptcha");

    wrap.appendChild(frame);
    recaptcha.appendChild(wrap);

    beforeEach(() => {
        document.body.appendChild(recaptcha);

        wrapper = mount(<Form/>);

        node = wrapper.getNode();
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should prevent default on validating ReCAPTCHA", () => {
        let isDefaultPrevented = false;

        wrapper.simulate("submit", {
            preventDefault: () => {
                isDefaultPrevented = true;
            }
        });

        expect(isDefaultPrevented).to.be.true;
    });

    it("should set classes for ReCAPTCHA on submit", () => {

        wrapper.simulate("submit");

        expect(document.body.className).to.contain("recaptcha-check");

        expect(document.body.querySelector(".iframe-wrap")).to.exist;
        expect(document.body.querySelector(".recaptcha-modal")).to.exist;

        expect((node as any).recaptchaWrap).to.exist;
    });

    it("should remove classes for ReCAPTCHA on unmount", () => {
        wrapper.simulate("submit");

        wrapper.unmount();

        expect(document.body.className).to.not.contain("recaptcha-check");

        expect(document.body.querySelector(".iframe-wrap")).to.not.exist;
        expect(document.body.querySelector(".recaptcha-modal")).to.not.exist;
    });
});
