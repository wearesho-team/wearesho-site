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

        const onChangeHandler = () => undefined;

        (MutationObserver as any).mutations[0].type = "childList";
        (MutationObserver as any).mutations[0].addedNodes[0] = recaptcha as Node;
        (new MutationObserver(() => undefined)).takeRecords();

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
    });

    afterEach(() => {
        wrapper.unmount();
        timer.restore();
        (MutationObserver as any).mutations[0].type = undefined;
        (MutationObserver as any).mutations[0].addedNodes[0] = undefined;
    });

    it("should set classes on mount", () => {
        expect(document.body.className).to.contain("recaptcha-check");

        expect(document.body.querySelector(".iframe-wrap")).to.exist;
        expect(document.body.querySelector(".recaptcha-modal")).to.exist;
    });

    it("should not set classes on mount when recaptcha wrap is not exist", () => {
        document.body.querySelector("iframe[title~='recaptcha']").remove();

        (MutationObserver as any).callBack((MutationObserver as any).mutations);

       const a  = (MutationObserver as any).callBack;

        expect(document.body.className).to.not.contain("recaptcha-check");

        expect(document.body.querySelector(".iframe-wrap")).to.not.exist;
        expect(document.body.querySelector(".recaptcha-modal")).to.not.exist;
    });

    it("should remove classes for ReCAPTCHA on unmount", () => {
        wrapper.unmount();
        expect(document.body.className).to.not.contain("recaptcha-check");

        expect(document.body.querySelector(".iframe-wrap")).to.not.exist;
        expect(document.body.querySelector(".recaptcha-modal")).to.not.exist;
    });
});
