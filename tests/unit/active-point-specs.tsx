import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {ActivePoint, ActivePointProps} from "../../src/components/TimeLine/YearItem/ActivePoint";

describe("<ActivePoint/>", () => {
    let wrapper: ReactWrapper<ActivePointProps, undefined>;
    let node: ActivePoint;
    let DOMNode: Element;

    let onProjectChangeHasCalled: boolean;
    const onProjectChange = (element: HTMLElement, position: number) => {
        if (element instanceof HTMLElement) {
            onProjectChangeHasCalled = true;
        }
    };

    let props: ActivePointProps = {
        isActive: true,
        index: 0,
        sideClassName: "test",
        onProjectChange
    };

    beforeEach(() => {
        wrapper = mount(<ActivePoint {...props}/>);

        node = wrapper.instance() as any;
        DOMNode = wrapper.getDOMNode();
    });

    afterEach(() => {
        wrapper.unmount();

        onProjectChangeHasCalled = false;
    });

    it("should set project if active on mount", () => {
        expect(onProjectChangeHasCalled).to.be.true;
    });

    it("should not set project if not active on mount", () => {

        props = {
            ...props,
            isActive: false
        };

        onProjectChangeHasCalled = false;

        wrapper = mount(<ActivePoint {...props}/>);

        expect(onProjectChangeHasCalled).to.be.false;
    });

    it("should set active class name if `isActive` equals true", () => {
        props = {
            ...props,
            isActive: true
        };

        wrapper.setProps(props);

        wrapper.mount();

        expect(DOMNode.className).to.contain(ActivePoint.activeClassName);
    });

    it("should set filled class name if `isActive` equals false", () => {
        props = {
            ...props,
            isActive: false
        };

        wrapper.setProps(props);

        wrapper.mount();

        expect(DOMNode.className).to.contain(ActivePoint.filledClassName);
    });

    it("should set project on click if `isActive` equals false", () => {
        props = {
            ...props,
            ...{
                isActive: false,
            }
        };

        wrapper.setProps(props);

        wrapper.mount();

        wrapper.simulate("click");

        expect(onProjectChangeHasCalled).to.be.true;
    });

    it("should ignore click if `isActive` equals true", () => {
        props = {
            ...props,
            isActive: true
        };

        wrapper.setProps(props);

        onProjectChangeHasCalled = false;

        wrapper.mount();

        wrapper.simulate("click");

        expect(onProjectChangeHasCalled).to.be.false;
    });
});
