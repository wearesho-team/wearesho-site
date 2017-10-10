import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {TimeInputProps, TimeInput} from "../../src/components/ContactPage/ContactForm/TimeInput";

describe("<TimeInput/>", () => {
    let wrapper: ReactWrapper<TimeInputProps, undefined>;
    let node: TimeInput;

    const defaultTime = ["12", "00"];

    const commonHandler = () => undefined;

    let onChangeTriggered = false;

    const onChange = () => {
        onChangeTriggered = true;
        return undefined;
    };
    const onAttributeChange = commonHandler;
    const onFocus = commonHandler;
    const onMount = commonHandler;
    const onBlur = commonHandler;

    beforeEach(() => {
        const context = {
            onChange, onAttributeChange, onFocus, onMount, onBlur,
            id: "id_test",
            name: "name_test"
        };

        wrapper = mount(<TimeInput defaultTime={defaultTime.join(":")}/>, {context});

        node = wrapper.instance() as any;
    });

    afterEach(() => {
        wrapper.unmount();
        onChangeTriggered = false;
    });

    it("Should set default time on mount", () => {
        expect((wrapper.find("input").getDOMNode() as HTMLInputElement).value).to.equal(defaultTime.join(":"));
    });

    it("Should take 1 hour on click button decrement", () => {
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

        expect(node.inputValue).to.equal("24:00");
    });

    it("Should set 59 minutes when minutes on input more than 59", () => {
        (wrapper.find("input").getDOMNode() as HTMLInputElement).value = "12:61";
        wrapper.find("input").simulate("change");

        expect(node.inputValue).to.equal("12:59");
    });

});
