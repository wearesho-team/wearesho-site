import { expect } from "chai";
import * as React from "react";
import { ReactWrapper, mount } from "enzyme";

import { TimeInputProps, TimeInput } from "../../src/components/Pages/MainLayout/PartnershipPage/ContactForm/Partials";

describe("<TimeInput/>", () => {
    let wrapper: ReactWrapper<TimeInputProps, undefined>;
    let node: TimeInput;

    const defaultTime = ["12", "00"];

    const commonHandler = () => undefined;

    let onChangeTriggered = false;
    let onFocusTriggered = false;

    const onChange = (value) => {
        onChangeTriggered = true;
        wrapper.context().value = value;
        node.forceUpdate();
        return undefined;
    };
    const onAttributeChange = commonHandler;
    const onFocus = () => onFocusTriggered = true;
    const onMount = commonHandler;
    const onBlur = commonHandler;

    const context = {
        onChange, onAttributeChange, onFocus, onMount, onBlur,
        id: "id_test",
        name: "name_test",
        value: defaultTime.join(":")
    };

    beforeEach(() => {
        wrapper = mount(<TimeInput />, { context });

        node = wrapper.instance() as any;
    });

    afterEach(() => {
        wrapper.unmount();
        onChangeTriggered = false;
        onFocusTriggered = false;
    });

    it("Should set default time on mount", () => {
        // cov improve
        wrapper.find("input").simulate("blur");
        wrapper.find("input").simulate("keyup", {
            key: "Tab"
        });
        expect((wrapper.find("input").getDOMNode() as HTMLInputElement).value).to.equal(defaultTime.join(":"));
    });

    it("Should take 1 hour on click button decrement", async () => {
        wrapper.find(".btn_dec").simulate("click");

        const expectedTime = `${Number(defaultTime[0]) - 1}:${defaultTime[1]}`;
        expect((wrapper.find("input").getDOMNode() as HTMLInputElement).value).to.equal(expectedTime);
    });

    it("Should add 1 hour on click button increment", () => {
        wrapper.find(".btn_inc").simulate("click");

        const expectedTime = `${Number(defaultTime[0]) + 1}:${defaultTime[1]}`;
        expect((wrapper.find("input").getDOMNode() as HTMLInputElement).value).to.equal(expectedTime);
    });

    it("Should set 00:00 when input value is empty", () => {
        (wrapper.find("input").getDOMNode() as HTMLInputElement).value = "";
        wrapper.find("input").simulate("change");

        expect(node.inputValue).to.equal("00:00");
    });

    it("Should not call `context.onChange` when `maskElement` does not exist", async () => {
        wrapper.unmount();
        await (node as any).handleDecrement();
        await (node as any).handleIncrement();

        expect(onChangeTriggered).to.be.false;
    });

    it("Should set `00:00` when hours equal -1 on decrement", () => {
        (wrapper.find("input").getDOMNode() as HTMLInputElement).value = "";
        wrapper.find("input").simulate("change");

        expect(node.inputValue).to.equal("00:00");

        wrapper.find(".btn_dec").simulate("click");
        expect(node.inputValue).to.equal("00:00");
    });

    it("Should set 24 hours when hours on input more than 24", () => {
        (wrapper.find("input").getDOMNode() as HTMLInputElement).value = "25:00";
        wrapper.find("input").simulate("change");

        expect(node.inputValue).to.equal("23:00");
    });

    it("Should set 59 minutes when minutes on input more than 59", () => {
        (wrapper.find("input").getDOMNode() as HTMLInputElement).value = "12:61";
        wrapper.find("input").simulate("change");

        expect(node.inputValue).to.equal("12:59");
    });

    it("Should call props.onCursorEnd if it pass when cursor on the end of input", () => {
        wrapper.unmount();
        let triggered = false;

        wrapper = mount(<TimeInput onCursorEnd={() => triggered = true} />, { context });

        (wrapper.find("input").getDOMNode() as HTMLInputElement).value = "12:59";
        wrapper.find("input").simulate("input", {
            target: {
                selectionStart: 5
            }
        });
        wrapper.find("input").simulate("change");

        expect(triggered).to.be.true;
    });

    it("Should increment/decrement hours on key up/down", () => {
        wrapper.find("input").simulate("keydown", {
            key: "ArrowDown"
        });

        expect(node.inputValue).to.equal("11:00");

        wrapper.find("input").simulate("keydown", {
            key: "ArrowUp"
        });

        expect(node.inputValue).to.equal("12:00");
    });

    it("Should trigger context.handleFocus on focus", () => {
        wrapper.find("input").simulate("focus");

        expect(onFocusTriggered).to.be.true;
    });
});
