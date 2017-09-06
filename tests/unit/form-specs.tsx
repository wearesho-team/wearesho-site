import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {ContactForm} from "../../src/components/ContactPage/ContactForm";

describe("<Form/>", () => {

    let wrapper: ReactWrapper<any, any>;

    beforeEach(() => {
        wrapper = mount(<ContactForm/>);
    });

    afterEach(() => wrapper.unmount());

    it("should prevent default on submit", () => {
        let isDefaultPrevented = false;

        wrapper.simulate("submit", {
            preventDefault: () => {
                isDefaultPrevented = true;
            }
        });

        expect(isDefaultPrevented).to.be.true;
    });
});
