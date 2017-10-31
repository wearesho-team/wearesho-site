import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {Slider, SliderProps} from "../../src/components/TimeLine/Slider";
import {projects, ProjectInterface} from "../../src/data/Projects";

describe("<Slider/>", () => {
    let wrapper: ReactWrapper<SliderProps, undefined>;
    let DOMNode: Element;

    const project: ProjectInterface = projects[projects.length - 1];

    const props: SliderProps = {
        offset: 10,
        className: "test",
        project
    };

    beforeEach(() => {
        wrapper = mount(<Slider {...props}/>);

        DOMNode = wrapper.getDOMNode();
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should set offset left value from props", () => {
        expect(DOMNode.getAttribute("style")).to.contain(`left: ${props.offset}%`);
    });

    it("should format date to `d.m.Y`", () => {
        const {date} = props.project;

        const format = `${date.day}. ${String("0" + date.month).slice(-2)}. ${date.year}`;

        expect(DOMNode.getElementsByClassName("slider__date")[0].innerHTML)
            .to.equal(format);
    });

});
