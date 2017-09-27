import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {Config} from "../../src/data/Config";
import {ReCaptcha, ReCaptchaProps} from "../../src/components/Widgets/ReCaptcha";

describe("<RE/>", () => {
    let wrapper: ReactWrapper<ReCaptchaProps, any>;
    let node: ReCaptcha;

    beforeEach(() => {
        const recaptcha = document.createElement("div");
        const wrap = document.createElement("div");
        const frame = document.createElement("iframe");

        frame.setAttribute("title", "test recaptcha");
        wrap.appendChild(frame);
        recaptcha.appendChild(wrap);

        document.body.appendChild(recaptcha);
        const onChangeHandler = () => undefined;

        wrapper = mount(
            <ReCaptcha
                sitekey={Config.reCaptchaApiKey}
                onChange={onChangeHandler}
                size="invisible"
                className="recaptcha-badge"
            />
        );

        node = wrapper.getNode() as any;
    });

    afterEach(() => wrapper.unmount());

    it("should set classes on `execute`", () => {
        ReCaptcha.execute();

        expect(document.body.className).to.contain("recaptcha-check");

        expect(document.body.querySelector(".iframe-wrap")).to.exist;
        expect(document.body.querySelector(".recaptcha-modal")).to.exist;
    });

    it("should remove classes for ReCAPTCHA on unmount", () => {
        ReCaptcha.execute();

        wrapper.unmount();
        expect(document.body.className).to.not.contain("recaptcha-check");

        expect(document.body.querySelector(".iframe-wrap")).to.not.exist;
        expect(document.body.querySelector(".recaptcha-modal")).to.not.exist;
    });
});
