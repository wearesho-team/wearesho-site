import { expect } from "chai";
import * as React from "react";
import { ReactWrapper, mount } from "enzyme";
import { Router, Link } from "react-router-dom";
import { createMemoryHistory, History } from "history";

import { SideBar } from "../../src/components/Layout/Partials";
import { mainRouteProps } from "../../src/data/routeProps";

describe("<SideBar/>", () => {
    let wrapper: ReactWrapper<any, any>;
    let history: History;

    const links = mainRouteProps
        .map((props) => <Link className="main-nav__link" to={props.path} key={props.path}>+</Link>);

    beforeEach(() => {
        history = createMemoryHistory();

        wrapper = mount(
            <Router history={history}>
                <SideBar>
                    {links}
                </SideBar>
            </Router>
        );

    });

    afterEach(() => wrapper.unmount());

    it("should set active class to menu item which prop `to` equals to URL path", () => {
        history.push(mainRouteProps[0].path);

        expect((wrapper.find(Link).first().getDOMNode().parentNode as HTMLElement).className).to.contain("is-active");

        wrapper.find(Link)
            .slice(1)
            .map((el) => expect(el.parent().props().className).to.not.contain("is-active"));

        history.push(mainRouteProps[mainRouteProps.length - 1].path);

        expect((wrapper.find(Link).last().getDOMNode().parentNode as HTMLElement).className).to.contain("is-active");

        wrapper.find(Link)
            .slice(-1)
            .map((el) => expect(el.parent().props().className).to.not.contain("is-active"));
    });
});
