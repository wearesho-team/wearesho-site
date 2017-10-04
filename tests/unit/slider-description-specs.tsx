import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {SliderDescription, SliderDescriptionProps} from "../../src/components/TimeLine/Slider/Partials";

describe("<SliderDescription/>", () => {
    let wrapper: ReactWrapper<SliderDescriptionProps, undefined>;
    let DOMNode: Element;

    const props: SliderDescriptionProps = {
        items: [
            "item1",
            "item2",
            "item3",
            "item4",
        ]
    };

    beforeEach(() => {
        wrapper = mount(<SliderDescription {...props}/>);

        DOMNode = wrapper.getDOMNode();
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should paste `/` symbol between items", () => {
        expect(DOMNode.innerHTML.split(" / ").length).to.equal(props.items.length);
    });

});
