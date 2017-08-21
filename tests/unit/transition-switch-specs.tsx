import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {createMemoryHistory, History} from "history";

import {TransitionSwitch, TransitionSwitchProps} from "../../src/components/TransitionSwitch";
import {Router, Route} from "react-router";

describe("<TransitionSwitch/>", () => {
    let wrapper: ReactWrapper<TransitionSwitchProps, any>;
    let history: History;
    let timer: SinonFakeTimers;
    const animationDuration = 500;

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
                <TransitionSwitch
                    history={history}
                    {...wrapperProps}
                >
                    <Route exact path="/" component={PageFirst}/>
                    <Route path="/view-1" component={PageSecond}/>
                </TransitionSwitch>
            </Router>
        );

        timer = useFakeTimers();
    });

    afterEach(() => {
        timer.restore();
    });

    it("should render one page on mount", () => {

        expect(wrapper).to.contain(<div id="p_0"/>);
        expect(wrapper.getDOMNode().children).to.have.length(1);
    });

    it("should render two pages when url changed", () => {
        history.push("/view-1");

        expect(wrapper).to.contain(<div id="p_0"/>);
        expect(wrapper).to.contain(<div id="p_1"/>);
        expect(wrapper.getDOMNode().children).to.have.length(2);
    });

    it("should contain two pages in dom at least 500ms after url changed", () => {
        history.push("/view-1");

        timer.tick(animationDuration / 2);

        expect(wrapper).to.contain(<div id="p_0"/>);
        expect(wrapper).to.contain(<div id="p_1"/>);
        expect(wrapper.getDOMNode().children).to.have.length(2);

        timer.tick(animationDuration / 2);

        expect(wrapper).to.contain(<div id="p_1"/>);
        expect(wrapper.getDOMNode().children).to.have.length(1);
    });

    it("should contain direction in class name at least 500ms after url changed", () => {
        history.push("/view-1");

        timer.tick(animationDuration / 2);
        expect(wrapper.getDOMNode().className).to.be.contain("up");
        timer.tick(animationDuration / 2);
        expect(wrapper.getDOMNode().className).to.be.not.contain("up");

        history.push("/");

        timer.tick(animationDuration / 2);
        expect(wrapper.getDOMNode().className).to.be.contain("down");
        timer.tick(animationDuration / 2);
        expect(wrapper.getDOMNode().className).to.be.not.contain("down");
    });
});
