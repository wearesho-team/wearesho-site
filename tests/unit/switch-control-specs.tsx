import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {Router} from "react-router";
import {createMemoryHistory, History} from "history";

import {TransitionSwitch} from "../../src/components/TransitionSwitch";
import {SwitchControl} from "../../src/components/SwitchControl";
import {getRoutesWithProps} from "../../src/helpers/routesWithProps";
import {routeProps} from "../../src/data/routeProps";

describe("<SwitchControl/>", () => {
    let wrapper: ReactWrapper<any, undefined>;

    let history: History;
    let timer: SinonFakeTimers;
    const animationDuration = 500;
    const additionalDuration = 100;

    let component: any;

    const props = {
        className: "wrapper-test",
        classNames: "test",
        timeout: animationDuration,
    };

    beforeEach(() => {
        history = createMemoryHistory();

        wrapper = mount(
            <Router history={history}>
                <SwitchControl>
                    <TransitionSwitch {...props}>
                        {getRoutesWithProps()}
                    </TransitionSwitch>
                </SwitchControl>
            </Router>
        );
        component = wrapper.find(SwitchControl).getNode();
        timer = useFakeTimers();
    });

    afterEach(() => {
        wrapper.unmount();
        timer.restore();
    });

    it("should set scroll disabled for 600ms when URL change", () => {
        history.push(routeProps[1].path);

        timer.tick(animationDuration / 2 + additionalDuration / 2);
        expect(component.isScrollDisabled).to.be.true;

        timer.tick(animationDuration / 2 + additionalDuration / 2);
        expect(component.isScrollDisabled).to.be.false;
    });

    it("should set next route when press arrow key down", () => {
        component.handleKeyPress(({key: "ArrowDown"}));

        expect(history.location.pathname).to.be.equal(routeProps[1].path);
    });

    it("should set prev route when press arrow key up", () => {
        component.handleKeyPress(({key: "ArrowUp"}));

        expect(history.location.pathname).to.be.equal(routeProps[0].path);
    });

    it("should set next route when mouse wheel up", () => {
        component.handleWheel(({deltaY: 100}));

        expect(history.location.pathname).to.be.equal(routeProps[1].path);
    });

    it("should set prev route when mouse wheel down", () => {
        component.handleWheel(({deltaY: -100}));

        expect(history.location.pathname).to.be.equal(routeProps[0].path);
    });

    it("should ignore any switch control events when animation in progress", () => {
        component.handleKeyPress(({key: "ArrowDown"}));

        timer.tick(animationDuration / 2 + additionalDuration / 2);
        expect(component.isScrollDisabled).to.be.true;
        expect(history.location.pathname).to.be.equal(routeProps[1].path);

        component.handleKeyPress(({key: "ArrowUp"}));
        expect(component.isScrollDisabled).to.be.true;
        expect(history.location.pathname).to.be.equal(routeProps[1].path);

        component.handleWheel(({deltaY: -100}));
        expect(component.isScrollDisabled).to.be.true;
        expect(history.location.pathname).to.be.equal(routeProps[1].path);

        component.handleWheel(({deltaY: 100}));
        expect(component.isScrollDisabled).to.be.true;
        expect(history.location.pathname).to.be.equal(routeProps[1].path);

        timer.tick(animationDuration / 2 + additionalDuration / 2);
        expect(component.isScrollDisabled).to.be.false;
    });
});
