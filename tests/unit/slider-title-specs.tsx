import { expect } from "chai";
import * as React from "react";
import { ReactWrapper, mount } from "enzyme";

import { SliderTitle, SliderTitleProps } from "../../src/components/TimeLine/Slider/Partials";

describe("<SliderTitle/>", () => {
    let wrapper: ReactWrapper<SliderTitleProps, undefined>;
    let DOMNode: Element;

    const props: SliderTitleProps = {
        title: [
            {
                name: "test1",
                url: "url1"
            },
            {
                name: "test2",
                url: "url2"
            }
        ]
    };

    beforeEach(() => {
        wrapper = mount(<SliderTitle {...props} />);

        DOMNode = wrapper.getDOMNode();
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should paste `/` symbol between <a/> items", () => {
        expect(DOMNode.innerHTML.split(" / ").length).to.equal(props.title.length);

        expect(DOMNode.innerHTML.split("</a>").length).to.equal(props.title.length + 1);
    });

});
