import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {TransformAnimationProps} from "../../src/components/Animations/Interactive/TransformAnimation";
import {TransformAnimationState} from "../../src/components/Animations/Interactive/TransformAnimation";
import {TransformAnimation} from "../../src/components/Animations/Interactive/TransformAnimation";

describe("<TransformAnimation/>", () => {
    let wrapper: ReactWrapper<TransformAnimationProps, TransformAnimationState>;
    let timer: SinonFakeTimers;

    const initialComponent = <div className="initial"/>;
    const transformedComponent = <div className="transformed"/>;
    const duration = 100;

    const props = {
        initialComponent,
        transformedComponent,
        duration,
        event: "onClick"
    };

    beforeEach(() => {
        wrapper = mount(<TransformAnimation {...props}/>);
        timer = useFakeTimers();
    });

    afterEach(() => {
        timer.restore();
        wrapper.unmount();
    });

    it("Should set `transformed` state true on click", () => {
        const root = wrapper.find(".inner-layout");

        root.simulate("click");
        expect(wrapper.state().transformed).to.be.true;
    });

    it("Should ignore click when `transformed` state equals true", () => {
        const root = wrapper.find(".inner-layout");

        let isUpdated = false;
        const setState = wrapper.instance().setState.bind(wrapper.instance());

        wrapper.instance().setState = (props) => {
            isUpdated = true;
            setState(props);
        };

        root.simulate("click");
        expect(wrapper.state().transformed).to.be.true;
        expect(isUpdated).to.be.true;

        isUpdated = false;
        root.simulate("click");
        expect(wrapper.state().transformed).to.be.true;
        expect(isUpdated).to.be.false;
    });

    it("Should call `onEvent` if it function", () => {
        let onEventTriggered = false;
        wrapper.setProps({
            ...props,
            ...{
                onEvent: () => onEventTriggered = true
            }
        });

        const root = wrapper.find(".inner-layout");

        root.simulate("click");
        expect(onEventTriggered).to.be.true;
    })
});
