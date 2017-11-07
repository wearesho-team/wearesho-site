import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {CodeStyleAnimationProps} from "../../src/components/Animations/Static/CodeStyleAnimation/CodeStyleAnimationProps";
import {CodeStyleAnimationState} from "../../src/components/Animations/Static/CodeStyleAnimation/CodeStyleAnimationState";
import {CodeStyleAnimation} from "../../src/components/Animations/Static/CodeStyleAnimation/CodeStyleAnimation";
import {CodeStyleAnimationSpeed} from "../../src/components/Animations/Static/CodeStyleAnimation/CodeStyleAnimationSpeed";

describe("<CodeStyleAnimation/>", () => {
    let wrapper: ReactWrapper<CodeStyleAnimationProps, CodeStyleAnimationState>;
    let timer: SinonFakeTimers;

    const text = "awesome text";
    const textArray = ["this", "is", "array", "of", "strings"];
    const delay = 100;
    const startFeature = {
        element: document.body,
        attribute: "class",
        value: "loaded"
    };

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
            <CodeStyleAnimation startFeature={startFeature}>
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
        wrapper = mount(
            <CodeStyleAnimation startFeature={startFeature}>
                {textArray}
            </CodeStyleAnimation>
        );

        expect((wrapper.getDOMNode() as any).wholeText).to.equal(textArray.join("\n").replace(/[^\n]/g, " "));
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

    it("Should set new child on receive new props", () => {
        document.body.className = "loaded";
        wrapper.unmount().mount();
        wrapper.setProps({
            children: text
        });

        expect((wrapper.getDOMNode() as any).wholeText).to.equal(text);

        wrapper.setProps({
            children: textArray
        });

        expect((wrapper.getDOMNode() as any).wholeText).to.equal(textArray.join("\n"));

        // bad situation
        expect(() =>
            wrapper.setProps({
                children: <div/> as any
            })
        )
            .to.throw("Incorrect type of children. Only string or string [] are available");
    });
});
