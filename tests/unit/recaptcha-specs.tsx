import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {Config} from "../../src/data/Config";
import {ReCaptcha, ReCaptchaProps} from "../../src/components/Widgets/ReCaptcha";
import {TransitionSwitch} from "../../src/components/TransitionSwitch/TransitionSwitch";

describe("<ReCaptcha/>", () => {
    let wrapper: ReactWrapper<ReCaptchaProps, any>;
    let node: ReCaptcha;
    let timer: SinonFakeTimers;

    const additionalDuration = 100;
    const animationDuration = TransitionSwitch.animationDuration + additionalDuration;
    const onChangeHandler = () => undefined;

    let recaptcha: HTMLElement;

    beforeEach(() => {
        recaptcha = document.createElement("div");
        const wrap = document.createElement("div");
        const frame = document.createElement("iframe");

        frame.setAttribute("title", "test recaptcha");
        wrap.appendChild(frame);
        recaptcha.appendChild(wrap);

        recaptcha.setAttribute("style", "height: 10px");
        document.body.appendChild(recaptcha);

        (MutationObserver as any).mutations[0].type = "childList";
        (MutationObserver as any).mutations[0].addedNodes[0] = recaptcha as Node;

        timer = useFakeTimers();

        wrapper = mount(
            <ReCaptcha
                sitekey={Config.reCaptchaApiKey}
                onChange={onChangeHandler}
                size="invisible"
                className="recaptcha-badge"
            />
        );

        timer.tick(animationDuration);
        node = wrapper.instance() as any;

        // just for coverage
        ReCaptcha.execute();
    });

    afterEach(() => {
        timer.restore();
        wrapper.unmount();
        (MutationObserver as any).mutations[0].type = undefined;
        (MutationObserver as any).mutations[0].addedNodes[0] = undefined;
    });

    it("should set classes on mount", () => {
        expect(document.body.className).to.contain("recaptcha-check");

        expect(document.body.querySelector(".iframe-wrap")).to.exist;
        expect(document.body.querySelector(".recaptcha-modal")).to.exist;
    });

    it("should remove classes for ReCAPTCHA on unmount", () => {
        wrapper.unmount();
        expect(document.body.className).to.not.contain("recaptcha-check");

        expect(document.body.querySelector(".iframe-wrap")).to.not.exist;
        expect(document.body.querySelector(".recaptcha-modal")).to.not.exist;
    });

    it("should not set class `recaptchaModal` if observer catch wrong element", () => {
        wrapper.unmount();

        (MutationObserver as any).mutations[0].type = "childList";
        (MutationObserver as any).mutations[0].addedNodes[0] = document.createElement("span") as Node;

        wrapper = mount(
            <ReCaptcha
                sitekey={Config.reCaptchaApiKey}
                onChange={onChangeHandler}
                size="invisible"
                className="recaptcha-badge"
            />
        );

        expect(document.body.querySelector(".recaptcha-modal")).to.not.exist;
    });
});
