import { expect } from "chai";
import * as React from "react";
import { Router } from "react-router";
import { ReactWrapper, mount } from "enzyme";
import { createMemoryHistory, History } from "history";
import { useFakeTimers, SinonFakeTimers } from "sinon";

import { mainRouteProps } from "../../src/data/routeProps";
import { RouterContext } from "../../src/data/RouterContext";
import { ScrollControl } from "../../src/components/ScrollControl";
import { LayoutContext } from "../../src/components/Layout/LayoutContext";

describe("<ScrollControl/>", () => {
    let wrapper: ReactWrapper<undefined, undefined>;
    let node: ScrollControl;
    let DOMNode: Element;
    let history: History;
    let timer: SinonFakeTimers;

    const params = {
        height: 200,
        pageYOffset: 100,
        offsetTop: 0,
        offsetHeight: 100
    };

    beforeEach(() => {
        history = createMemoryHistory();

        wrapper = mount(
            <Router history={history}>
                <ScrollControl routeProps={mainRouteProps}>
                    {mainRouteProps.map((prop) => prop.render())}
                </ScrollControl>
            </Router>
        );

        node = wrapper.find(ScrollControl).instance() as any;
        DOMNode = wrapper.find(ScrollControl).getDOMNode();
        timer = useFakeTimers();
    });

    afterEach(() => {
        history.push(mainRouteProps[0].path);
        timer.restore();
        wrapper.unmount();
    });

    it("Should set timer on scroll", () => {
        // we cant emulate window events
        (node as any).handleScroll();

        expect(node.timer).to.exist;
    });

    it("Should set new location on scroll", () => {
        // emulate window params
        (window as any) = {
            ...window,
            ...{
                screen: {
                    height: params.height
                },
                pageYOffset: params.pageYOffset
            }
        };

        // define HTML params for child nodes
        for (let i = 0; i < DOMNode.children.length; i++) {
            const child = DOMNode.children.item(i) as HTMLElement;

            Object.defineProperty(child, "offsetTop", {
                get: () => params.offsetTop + (i * 100)
            });

            Object.defineProperty(child, "offsetHeight", {
                get: () => params.offsetHeight
            });
        }

        // we cant emulate window events
        (node as any).handleScroll();
        timer.tick(ScrollControl.scrollListenDelay);

        expect(history.location.pathname).to.equal(mainRouteProps[1].path);
    });

    it("Should return on scroll if element dose not exist", () => {
        timer.restore();
        wrapper.unmount();
        // we cant emulate window events
        (node as any).handleScroll();
        timer.tick(ScrollControl.scrollListenDelay);

        expect(history.location.pathname).to.equal(mainRouteProps[0].path);
    });

    it("Should set page offset on mount according to url", () => {
        document.body.className = "loaded";

        let scrollChanged = false;
        const listen = (node as any).listenPathChange.bind(node);

        (node as any).listenPathChange = (props) => {
            scrollChanged = true;
            listen(props);
        };

        node.getMutations([{
            target: document.body
        }]);

        expect(scrollChanged).to.be.true;

        document.body.className = "";
    });
});
