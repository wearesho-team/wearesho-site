import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {TimeLine, TimeLineState, TimeLineProps} from "../../src/components/TimeLine";
import {YearItem} from "../../src/components/TimeLine/YearItem";
import {projects} from "../../src/data/Projects";

describe("<TimeLine/>", () => {
    let wrapper: ReactWrapper<TimeLineProps, TimeLineState>;
    let timer: SinonFakeTimers;
    const animationDuration = 300;

    beforeEach(() => {
        wrapper = mount(
            <TimeLine range={{max: 2019, min: 2014}}/>
        );

        timer = useFakeTimers();
    });

    afterEach(() => {
        wrapper.unmount();
        timer.restore();
    });

    it("should render 6 <YearItem/>'s on mount", () => {
        expect(wrapper.find(YearItem).length).to.equal(6);
    });
});
