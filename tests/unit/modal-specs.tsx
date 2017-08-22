import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {Modal, ModalProps} from "../../src/components/Modal";

describe("<Modal/>", () => {
    let wrapper: ReactWrapper<ModalProps, any>;

    const context: ModalProps = {
        isOpen: true,
        contentLabel: "test",
        className: "test-class"
    };

    beforeEach(() =>
        wrapper = mount(
            <Modal {...context}>
                <div className="child"/>
            </Modal>
        ));

    afterEach(() => wrapper.unmount());

    it("should be empty if closed", () => {

        wrapper.setProps({
            isOpen: false,
        });

        const child = document.body.getElementsByClassName("child")[0];

        expect(child).to.not.exist;
    });

    it("should contain children if opened", () => {

        wrapper.setProps({
            isOpen: false,
        });

        let child = document.body.getElementsByClassName("child")[0];

        expect(child).to.not.exist;

        wrapper.setProps({
            isOpen: true,
        });

        child = document.body.getElementsByClassName("child")[0];

        expect(child).to.exist;
    });
});
