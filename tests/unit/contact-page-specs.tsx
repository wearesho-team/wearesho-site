import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {ContactPage, ContactPageState} from "../../src/components/ContactPage";
import {SubmitButton} from "../../src/components/Buttons";

describe("<ContactPage/>", () => {
    let wrapper: ReactWrapper<any, ContactPageState>;
    let timer: SinonFakeTimers;
    let modal: Element;

    const animationDuration = 500;

    beforeEach(() => {
        wrapper = mount(<ContactPage/>);
        modal = document.body.querySelector(".ReactModalPortal");
        timer = useFakeTimers();
    });

    afterEach(() => {
        timer.restore();
        wrapper.unmount();
    });

    it("should open modal when click cooperate button", () => {
        const button = wrapper.find(SubmitButton);
        button.last().simulate("click");

        expect(modal.querySelector(".form")).to.exist;
        document.body.innerHTML = "";
    });

    it("should close modal when click close button", () => {
        const buttonOpen = wrapper.find(SubmitButton);
        buttonOpen.last().simulate("click");

        let defaultPrevented = false;

        const event = {
            preventDefault: () => {
                defaultPrevented = true;
            },
            returnValue: true,
        };
        expect(window.onwheel(event as any)).to.be.false;
        expect(defaultPrevented).to.be.true;
        expect(event.returnValue).to.be.false;

        expect(modal.querySelector(".form")).to.exist;

        const buttonClose = modal.querySelector(".modal .btn_close") as HTMLButtonElement;
        buttonClose.click();
        timer.tick(animationDuration);

        expect(modal.querySelector(".modal")).to.not.exist;
    });
});
