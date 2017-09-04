import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {SinonSpy, sinon} from "sinon";

import {ActivePoint, ActivePointProps} from "../../src/components/TimeLine/YearItem/ActivePoint";

describe("<ActivePoint/>", () => {
    let wrapper: ReactWrapper<ActivePointProps, undefined>;
    let node: ActivePoint;
    let DOMNode: Element;

    let onProjectChangeHasCalled: boolean;
    const onProjectChange = (element: HTMLElement, position: number) => onProjectChangeHasCalled = true;

    const props: ActivePointProps = {
        isActive: true,
        index: 0,
        sideClassName: "test",
        onProjectChange
    };

    beforeEach(() => {
        wrapper = mount(<ActivePoint {...props}/>);

        node = wrapper.getNode() as any;
        DOMNode = wrapper.getDOMNode();
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should set project if active on mount", () => {
        expect(onProjectChangeHasCalled).to.be.true;
    });

    it("should not set project if not active on mount", () => {
        onProjectChangeHasCalled = false;

        props.isActive = false;

        wrapper = mount(<ActivePoint {...props}/>);

        expect(onProjectChangeHasCalled).to.be.false;
    });

    it("should set active class name if `isActive` equals true", () => {
        props.isActive = true;

        wrapper.setProps(props);

        wrapper.mount();

        expect(DOMNode.className).to.contain(ActivePoint.activeClassName);
    });

    it("should set filled class name if `isActive` equals false", () => {
        props.isActive = false;

        wrapper.setProps(props);

        wrapper.mount();

        expect(DOMNode.className).to.contain(ActivePoint.filledClassName);
    });

    it("should set ref element", () => {
        sinon.spy(node as any, "setElement");
        wrapper.update();

        expect(((node as any).setElement as SinonSpy).called).to.be.true;
    });

    it("should set project on click if `isActive` equals false", () => {
        onProjectChangeHasCalled = false;

        props.isActive = false;

        wrapper.setProps(props);

        wrapper.mount();

        wrapper.simulate("click");

        expect(onProjectChangeHasCalled).to.be.true;
    });

    it("should ignore click if `isActive` equals true", () => {
        onProjectChangeHasCalled = false;

        props.isActive = true;

        wrapper.setProps(props);

        wrapper.mount();

        wrapper.simulate("click");

        expect(onProjectChangeHasCalled).to.be.false;
    });
});
