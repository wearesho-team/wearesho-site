import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {createMemoryHistory, History} from "history";

import {SideBar} from "../../src/components/Layout/Partials";
import {Router, Link} from "react-router-dom";
import {getLinksWithProps} from "../../src/helpers/getLinksWithProps";
import {routeProps} from "../../src/data/routeProps";

describe("<SideBar/>", () => {
    let wrapper: ReactWrapper<any, any>;
    let history: History;

    beforeEach(() => {
        history = createMemoryHistory();

        wrapper = mount(
            <Router history={history}>
                <SideBar>
                    {getLinksWithProps()}
                </SideBar>
            </Router>
        );

    });

    afterEach(() => wrapper.unmount());

    it("should set active class to menu item which prop `to` equals to URL path", () => {
        history.push(routeProps[0].path);

        expect((wrapper.find(Link).first().getDOMNode().parentNode as HTMLElement).className).to.contain("is-active");

        wrapper.find(Link)
            .slice(1)
            .map((el) => expect(el.parent().props().className).to.not.contain("is-active"));

        history.push(routeProps[routeProps.length - 1].path);

        expect((wrapper.find(Link).last().getDOMNode().parentNode as HTMLElement).className).to.contain("is-active");

        wrapper.find(Link)
            .slice(-1)
            .map((el) => expect(el.parent().props().className).to.not.contain("is-active"));
    });
});
