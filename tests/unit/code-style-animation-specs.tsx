import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {CodeStyleAnimationProps} from "../../src/components/Animations/CodeStyleAnimation/CodeStyleAnimationProps";
import {CodeStyleAnimationState} from "../../src/components/Animations/CodeStyleAnimation/CodeStyleAnimationState";
import {CodeStyleAnimation} from "../../src/components/Animations/CodeStyleAnimation/CodeStyleAnimation";
import {CodeStyleAnimationSpeed} from "../../src/components/Animations/CodeStyleAnimation/CodeStyleAnimationSpeed";

describe("<CodeStyleAnimation/>", () => {
    let wrapper: ReactWrapper<CodeStyleAnimationProps, CodeStyleAnimationState>;
    let timer: SinonFakeTimers;

    const text = "awesome text";
    const textArray = ["this\n", "is\n", "array\n", "of\n", "strings"];
    const delay = 100;

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
            <CodeStyleAnimation>
                {text}
            </CodeStyleAnimation>
        );
        timer = useFakeTimers();
    });

    afterEach(() => {
        (MutationObserver as any).mutations[0].target = undefined;
        document.body.className = "";
        timer.restore();
        wrapper.unmount();
    });

    it("Should just render children if body already loaded on mount", () => {
        document.body.className = "loaded";
        wrapper.unmount().mount();
        expect((wrapper.getDOMNode() as any).wholeText).to.equal(text);
    });

    it("Should render string with spaces instead symbols if children is string array", () => {
        wrapper.unmount();
        wrapper.setProps({
            children: textArray,
        });
        wrapper.mount();

        expect((wrapper.getDOMNode() as any).wholeText).to.equal(textArray.join("").replace(/[^\n]/g, " "));
    });

    it("Should start typing after body loaded and delay from props", () => {
        simulateMutation({
            speed: CodeStyleAnimationSpeed.fast,
            delay
        });

        timer.tick(CodeStyleAnimationSpeed.fast.max * text.length + delay);
        expect((wrapper.getDOMNode() as any).wholeText).to.equal(text);
    });

    it("Should remove caret when typing is done after caretTimeout from props", () => {
        simulateMutation({
            speed: CodeStyleAnimationSpeed.fast,
            delay: 0,
            caretTimeout: delay
        });

        timer.tick(delay);
        expect(wrapper.instance().state.children[1].props.className).to.equal("caret");

        timer.tick(CodeStyleAnimationSpeed.fast.max * text.length);
        expect(wrapper.instance().state.children).to.equal(text);
    });
});
