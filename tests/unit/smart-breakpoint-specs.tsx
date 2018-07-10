import { expect } from "chai";
import * as React from "react";
import { ReactWrapper, mount } from "enzyme";
import { useFakeTimers, SinonFakeTimers } from "sinon";

import { SmartBreakpoint, SmartBreakpointProps } from "../../src/components/SmartBreakpoint";

describe("<SmartBreakpoint/>", () => {
    let wrapper: ReactWrapper<SmartBreakpointProps, undefined>;
    let DOMNode: Element;
    let node: SmartBreakpoint;
    let timer: SinonFakeTimers;

    const props: SmartBreakpointProps = {
        match: "max-width: 1439px"
    };

    beforeEach(() => {

        wrapper = mount(
            <SmartBreakpoint {...props}>
                <div />
            </SmartBreakpoint>
        );

        DOMNode = wrapper.getDOMNode();
        node = wrapper.instance() as any;

        timer = useFakeTimers();

    });

    afterEach(() => {
        timer.restore();

        wrapper.unmount();
    });

    it("should set `state.matches` false when window size not match to condition", () => {
        // emulate window matchMedia
        (window as any).matchMedia = () => {
            return {
                matches: false
            }
        };

        // we cant resize window in tests - its not exist:-(
        (node as any).handleResize();

        expect(node.state.matches).to.be.false;
    });

    it("should set `state.matches` true when window size match to condition", () => {
        // emulate window matchMedia
        (window as any).matchMedia = () => {
            return {
                matches: false
            }
        };

        // we cant resize window in tests - its not exist:-(
        (node as any).handleResize();

        expect(node.state.matches).to.be.false;

        // emulate window matchMedia
        (window as any).matchMedia = () => {
            return {
                matches: true
            }
        };

        // we cant resize window in tests - its not exist:-(
        (node as any).handleResize();

        expect(node.state.matches).to.be.true;
    });

    it("should render child after delay when prop `delay` is exist", () => {
        // emulate window matchMedia
        (window as any).matchMedia = () => {
            return {
                matches: true
            }
        };

        wrapper = mount(
            <SmartBreakpoint {...props} delay={100}>
                <div />
            </SmartBreakpoint>
        );

        timer.tick(50);
        expect((wrapper.instance() as any).state.matches).to.be.false;

        timer.tick(50);
        expect((wrapper.instance() as any).state.matches).to.be.true;
    });

});
