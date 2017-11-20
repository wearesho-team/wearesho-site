import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {PartnershipPage, PartnershipPageState} from "../../src/components/Pages/PartnershipPage";
import {SubmitButton} from "../../src/components/Buttons";

describe("<PartnershipPage/>", () => {
    let wrapper: ReactWrapper<any, PartnershipPageState>;
    let timer: SinonFakeTimers;
    let modal: Element;

    const animationDuration = 500;

    beforeEach(() => {
        document.body.innerHTML = "";
        wrapper = mount(<PartnershipPage/>);
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
    });

    it("should close modal when click close button", () => {
        const buttonOpen = wrapper.find(SubmitButton);
        buttonOpen.last().simulate("click");

        expect(modal.querySelector(".form")).to.exist;

        const buttonClose = modal.querySelector(".modal .btn_close") as HTMLButtonElement;
        buttonClose.click();
        timer.tick(animationDuration);

        expect(modal.querySelector(".modal")).to.not.exist;
    });

    it("should open form when click cooperate button (mobile)", () => {
        const buttonOpen = wrapper.find(".inner-layout");
        buttonOpen.first().simulate("click");

        timer.tick(animationDuration * 2);
        expect(wrapper.getDOMNode().querySelector(".form")).to.exist;
    });
});
