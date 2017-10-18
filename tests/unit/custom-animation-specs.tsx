import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {CustomAnimationProps} from "../../src/components/Animations/CustomAnimation/CustomAnimationProps";
import {CustomAnimationState} from "../../src/components/Animations/CustomAnimation/CustomAnimationState";
import {CustomAnimation} from "../../src/components/Animations/CustomAnimation/CustomAnimation";

describe("<CustomAnimation/>", () => {
    let wrapper: ReactWrapper<CustomAnimationProps, CustomAnimationState>;
    let timer: SinonFakeTimers;

    const actionClassName = "animate";
    const child = <div className="child"/>;
    const delay = 100;
    const duration = 200;

    function simulateMutation(props) {
        wrapper.unmount();

        Object.defineProperty(document.body, "attributes", {
            configurable: true,
            get: () => {
                return {
                    getNamedItem: () => {
                        return {
                            value: "loaded"
                        }
                    }
                }
            }
        });
        (MutationObserver as any).mutations[0].target = document.body;

        wrapper.setProps(props);
        wrapper.mount();
    }

    beforeEach(() => {
        wrapper = mount(
            <CustomAnimation actionClassName={actionClassName}>
                {child}
            </CustomAnimation>
        );
        timer = useFakeTimers();
    });

    afterEach(() => {
        (MutationObserver as any).mutations[0].target = undefined;
        document.body.className = "";
        timer.restore();
        wrapper.unmount();
    });

    it("Should just render children with opacity on mount", () => {
        expect(wrapper.getDOMNode().getAttribute("style")).to.contains("opacity: 0");
    });

    it("Should just render children if body already loaded on mount", () => {
        document.body.className = "loaded";
        wrapper.unmount().mount();
        expect(wrapper.getDOMNode().className).to.equal("child");
    });

    it("Should start animation after delay from props", () => {
        simulateMutation({
            ...wrapper.props(),
            ...{delay}
        });

        timer.tick(delay);
        expect(wrapper.getDOMNode().className).to.contains(actionClassName);
    });

    it("Should remove animation class name when its done", () => {
        simulateMutation({
            ...wrapper.props(),
            ...{
                delay,
                duration
            }
        });

        timer.tick(delay);
        expect(wrapper.getDOMNode().className).to.contains(actionClassName);

        timer.tick(duration);
        expect(wrapper.getDOMNode().className).to.not.contains(actionClassName);
    });
});
