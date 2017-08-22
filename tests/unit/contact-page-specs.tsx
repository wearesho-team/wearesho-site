import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {matchMedia} from "./helpers/matchMedia";

import {ContactPage, ContactPageState} from "../../src/components/ContactPage";

matchMedia();

describe("<ContactPage/>", () => {

    let wrapper: ReactWrapper<any, ContactPageState>;

    beforeEach(() => wrapper = mount(<ContactPage/>));

    afterEach(() => wrapper.unmount());

    it("should open modal when click cooperate button", () => {
        const button = wrapper.find(".contact-info .align-container + .btn_primary");

        button.simulate("click");

        const modal = document.body.querySelector(".ReactModalPortal > .modal-overlay ");
        expect(modal.getElementsByClassName("form")[0]).to.exist;
    });

    it("should close modal when click close button", () => {
        const button = wrapper.find(".contact-info .align-container + .btn_primary");

        button.simulate("click");

        let modal = document.body.querySelector(".ReactModalPortal > .modal-overlay ");
        expect(modal.getElementsByClassName("form")[0]).to.exist;

        const buttonClose = document.body.querySelector(".ReactModalPortal .modal-body > .btn") as HTMLButtonElement;
        buttonClose.click();

        modal = document.body.querySelector(".ReactModalPortal");
        expect(modal.getElementsByClassName("form")[0]).to.not.exist;
    });

    it("should change state `isOnSubmit` to true when form submit", () => {
       const form = wrapper.find(".form");

       form.simulate("submit");

       expect(wrapper.state().isOnSubmit).to.be.true;
    });

});
