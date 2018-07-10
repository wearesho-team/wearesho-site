import { expect } from "chai";
import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { useFakeTimers, SinonFakeTimers } from "sinon";

import { TouchHover } from "../../src/helpers/TouchHover";

describe("TouchHover", () => {
    let wrapper: ReactWrapper<any, any>;
    let timer: SinonFakeTimers;

    const delay = 600;

    beforeEach(() => {
        wrapper = mount(<button className="button" {...TouchHover} />);

        timer = useFakeTimers();
    });

    afterEach(() => {
        timer.restore();
        wrapper.unmount();
    });

    it("Should add `is-active` class name on touch events", () => {
        wrapper.simulate("touchStart");

        timer.tick(delay / 2);
        expect(wrapper.getDOMNode().className).to.equal("button is-active");

        timer.tick(delay / 2);
        expect(wrapper.getDOMNode().className).to.equal("button");

        wrapper.simulate("touchEnd");

        timer.tick(delay / 2);
        expect(wrapper.getDOMNode().className).to.equal("button is-active");

        timer.tick(delay / 2);
        expect(wrapper.getDOMNode().className).to.equal("button");
    });
});
