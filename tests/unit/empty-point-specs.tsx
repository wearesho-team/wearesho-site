import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {EmptyPoint, EmptyPointProps} from "../../src/components/TimeLine/YearItem/EmptyPoint";

describe("<ActivePoint/>", () => {
    let wrapper: ReactWrapper<EmptyPointProps, undefined>;
    let DOMNode: Element;

    const props: EmptyPointProps = {
        sideClassName: "test",
    };

    beforeEach(() => {
        wrapper = mount(<EmptyPoint {...props}/>);

        DOMNode = wrapper.getDOMNode();
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should set class name from props", () => {
        expect(DOMNode.className).to.contain(props.sideClassName);
    });

});
