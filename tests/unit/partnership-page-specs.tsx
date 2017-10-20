import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {PartnershipPage, PartnershipPageState} from "../../src/components/Pages/PartnershipPage";
import {SubmitButton} from "../../src/components/Buttons";

describe("<PartnershipPage/>", () => {

    let wrapper: ReactWrapper<any, PartnershipPageState>;

    let modal: Element;

    beforeEach(() => {
        wrapper = mount(<PartnershipPage/>);
        modal = document.body.querySelector(".ReactModalPortal");
    });

    afterEach(() => wrapper.unmount());

    it("should open modal when click cooperate button", () => {
        const button = wrapper.find(SubmitButton);
        button.last().simulate("click");

        expect(modal.querySelector(".form")).to.exist;
    });

    it("should close modal when click close button", () => {
        const buttonOpen = wrapper.find(SubmitButton);
        buttonOpen.last().simulate("click");

        let defaultPrevented = false;

        // temp
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

        const buttonClose = document.body.querySelector(".ReactModalPortal .modal .btn_close") as HTMLButtonElement;

        buttonClose.click();

        expect(modal.querySelector(".form")).to.not.exist;
    });
});
