import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {ContactPage, ContactPageState} from "../../src/components/ContactPage";
import {SubmitButton} from "../../src/components/Buttons";

describe("<ContactPage/>", () => {

    let wrapper: ReactWrapper<any, ContactPageState>;

    let modal: Element;

    beforeEach(() => {
        wrapper = mount(<ContactPage/>);
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

        expect(modal.querySelector(".form")).to.exist;

        const buttonClose = document.body.querySelector(".ReactModalPortal .modal .btn_close") as HTMLButtonElement;

        buttonClose.click();

        expect(modal.querySelector(".form")).to.not.exist;
    });
});
