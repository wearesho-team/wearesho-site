import { expect } from "chai";
import * as React from "react";
import { mount, ReactWrapper } from "enzyme";

import { getElementOffset } from "../../src/helpers/getElementOffset";

describe("getElementOffset()", () => {
    let wrapper: ReactWrapper<any, undefined>;

    const customOffset = 500;

    beforeEach(() => {
        wrapper = mount(
            <div className="body">
                <div className="grandParent">
                    <div className="parent">
                        <div className="child" />
                    </div>
                </div>
            </div>
        )
    });

    it("should return parent element offset includes child offset", () => {

        const child = wrapper.getDOMNode().getElementsByClassName("child")[0] as any;
        const grandParent = wrapper.getDOMNode().getElementsByClassName("grandParent")[0] as any;

        Object.defineProperty(child, "offsetLeft", {
            get: () => customOffset
        });

        grandParent.getBoundingClientRect = () => {
            return {
                width: 100
            }
        };

        expect(getElementOffset(child)).to.equal(customOffset);
    });

});
