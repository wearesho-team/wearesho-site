import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {createMemoryHistory, History} from "history";

import {TransitionSwitch, TransitionSwitchProps, TransitionSwitchState} from "../../src/components/TransitionSwitch";
import {Router, Route} from "react-router";
import {SwitchControl} from "../../src/components/SwitchControl";

const upClassName = "up";
const downClassName = "down";

describe("<TransitionSwitch/>", () => {
    let wrapper: ReactWrapper<TransitionSwitchProps, TransitionSwitchState>;

    let history: History;
    let timer: SinonFakeTimers;
    const animationDuration = 500;
    const additionalDuration = 100;

    const wrapperProps = {
        className: "wrapper-test",
        classNames: "test",
        timeout: animationDuration,
    };

    const PageFirst = () => <div id="p_0"/>;
    const PageSecond = () => <div id="p_1"/>;

    beforeEach(() => {
        history = createMemoryHistory();

        wrapper = mount(
            <Router history={history}>
                <SwitchControl>
                    <TransitionSwitch {...wrapperProps}>
                        <Route exact path="/" component={PageFirst}/>
                        <Route path="/view-1" component={PageSecond}/>
                    </TransitionSwitch>
                </SwitchControl>
            </Router>
        );

        timer = useFakeTimers();
    });

    afterEach(() => {
        timer.restore();
        wrapper.unmount();
    });

    it("should render one page on mount", () => {
        expect(wrapper.contains(<div id="p_0"/>)).to.be.true;
        expect(wrapper.getDOMNode().children).to.have.length(1);
    });

    it("should render two pages when url changed", () => {
        history.push("/view-1");
        wrapper.update();

        expect(wrapper.contains(<div id="p_0"/>)).to.be.true;
        expect(wrapper.contains(<div id="p_1"/>)).to.be.true;
        expect(wrapper.getDOMNode().children).to.have.length(2);
    });

    it("should contain two pages in dom at least 600ms after url changed", () => {
        history.push("/view-1");
        wrapper.update();

        timer.tick(animationDuration / 2 + additionalDuration / 2);

        expect(wrapper.contains(<div id="p_0"/>)).to.be.true;
        expect(wrapper.contains(<div id="p_1"/>)).to.be.true;
        expect(wrapper.getDOMNode().children).to.have.length(2);

        timer.tick(animationDuration / 2 + additionalDuration / 2);

        expect(wrapper.contains(<div id="p_1"/>)).to.be.true;
        expect(wrapper.getDOMNode().children).to.have.length(1);
    });

    it("should contain direction in class name at least 600ms after url changed", () => {
        history.push("/view-1");

        timer.tick(animationDuration / 2 + additionalDuration / 2);
        expect(wrapper.getDOMNode().className).to.contain(upClassName);
        timer.tick(animationDuration / 2 + additionalDuration / 2);
        expect(wrapper.getDOMNode().className).to.not.contain(upClassName);

        history.push("/");

        timer.tick(animationDuration / 2 + additionalDuration / 2);
        expect(wrapper.getDOMNode().className).to.contain(downClassName);
        timer.tick(animationDuration / 2 + additionalDuration / 2);
        expect(wrapper.getDOMNode().className).to.not.contain(downClassName);
    });
});
