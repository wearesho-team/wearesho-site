import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {SmartBreakpoint, SmartBreakpointProps} from "../../src/components/SmartBreakpoint";

describe("<SmartBreakpoint/>", () => {
    let wrapper: ReactWrapper<SmartBreakpointProps, undefined>;
    let DOMNode: Element;
    let node: SmartBreakpoint;

    const props: SmartBreakpointProps = {
        match: "max-width: 1439px"
    };

    beforeEach(() => {

        wrapper = mount(
            <SmartBreakpoint {...props}>
                <div/>
            </SmartBreakpoint>
        );

        DOMNode = wrapper.getDOMNode();
        node = wrapper.getNode() as any;
    });

    afterEach(() => {
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

});
