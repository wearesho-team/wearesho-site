import * as React from "react";
import {getElementOffset} from "../../src/helpers/getElementOffset";

import {expect} from "chai";
import {mount, ReactWrapper} from "enzyme";

describe("compareMonthWithScale()", () => {
    let wrapper: ReactWrapper<any, undefined>;

    const customOffset = 500;

    beforeEach(() => {
        wrapper = mount(
            <div className="body">
                <div className="parent">
                    <div className="child"/>
                </div>
            </div>
        )
    });

    it("should return parent element offset includes child offset", () => {

        const child = wrapper.getDOMNode().getElementsByClassName("child")[0] as any;

        Object.defineProperty(child, "offsetLeft", {
            get: () => customOffset
        });

        expect(getElementOffset(child)).to.equal(customOffset);
    });

});
