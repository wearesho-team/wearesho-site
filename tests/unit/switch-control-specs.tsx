import { expect } from "chai";
import * as React from "react";
import { ReactWrapper, mount } from "enzyme";
import { Route, Router } from "react-router";
import { useFakeTimers, SinonFakeTimers } from "sinon";
import { createMemoryHistory, History } from "history";

import { TransitionSwitch } from "../../src/components/TransitionSwitch";
import { SwitchControl } from "../../src/components/SwitchControl";
import { mainRouteProps } from "../../src/data/routeProps";

describe("<SwitchControl/>", () => {
    let wrapper: ReactWrapper<any, undefined>;

    let history: History;
    let timer: SinonFakeTimers;
    const animationDuration = 501;

    let component: any;

    const props = {
        className: "wrapper-test",
        classNames: "test",
        timeout: animationDuration,
    };

    const componentOne = (): JSX.Element => {
        return <div id="component_1" />;
    };

    const componentTwo = (): JSX.Element => {
        return <div id="component_2" />;
    };

    beforeEach(() => {
        history = createMemoryHistory();

        wrapper = mount(
            <Router history={history}>
                <SwitchControl routeProps={mainRouteProps}>
                    <TransitionSwitch {...props}>
                        <Route exact path={mainRouteProps[0].path} component={componentOne} />
                        <Route path={mainRouteProps[1].path} component={componentTwo} />
                    </TransitionSwitch>
                </SwitchControl>
            </Router>
        );
        component = wrapper.find(SwitchControl).instance();
        timer = useFakeTimers();
    });

    afterEach(() => {
        timer.restore();
        wrapper.unmount();
    });

    it("should set next route when press arrow key down", () => {
        component.handleKeyPress(({ key: "ArrowDown" }));

        expect(history.location.pathname).to.be.equal(mainRouteProps[1].path);
    });

    it("should set prev route when press arrow key up", () => {
        component.handleKeyPress(({ key: "ArrowUp" }));

        expect(history.location.pathname).to.be.equal(mainRouteProps[0].path);
    });

    it("should set next route when mouse wheel up", () => {
        component.handleWheel(({ deltaY: 100 }));

        expect(history.location.pathname).to.be.equal(mainRouteProps[1].path);
    });

    it("should set prev route when mouse wheel down", () => {
        component.handleWheel(({ deltaY: -100 }));

        expect(history.location.pathname).to.be.equal(mainRouteProps[0].path);
    });

    it("should not change route when mouse wheel emit 0", () => {
        component.handleWheel(({ deltaY: 0 }));

        expect(history.location.pathname).to.be.equal(mainRouteProps[0].path);
    })

    it("should ignore any switch control events when animation in progress", () => {
        component.handleKeyPress(({ key: "ArrowDown" }));

        timer.tick(SwitchControl.scrollTimeout / 2);
        expect(component.isScrollDisabled).to.be.true;
        expect(history.location.pathname).to.be.equal(mainRouteProps[1].path);

        component.handleKeyPress(({ key: "ArrowUp" }));
        expect(component.isScrollDisabled).to.be.true;
        expect(history.location.pathname).to.be.equal(mainRouteProps[1].path);

        component.handleWheel(({ deltaY: -100 }));
        expect(component.isScrollDisabled).to.be.true;
        expect(history.location.pathname).to.be.equal(mainRouteProps[1].path);

        component.handleWheel(({ deltaY: 100 }));
        expect(component.isScrollDisabled).to.be.true;
        expect(history.location.pathname).to.be.equal(mainRouteProps[1].path);

        timer.tick(SwitchControl.scrollTimeout / 2);
        expect(component.isScrollDisabled).to.be.false;
    });

    it("should ignore key events if active element not body", () => {
        Object.defineProperty(document, "activeElement", {
            get: () => document.createElement("div")
        });

        component.handleKeyPress(({ key: "ArrowDown" }));

        expect(history.location.pathname).to.be.equal(mainRouteProps[0].path);
    })
});
