import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {createMemoryHistory, History} from "history";

import {SideBar} from "../../src/components/Layout/Partials";
import {Router, Link} from "react-router-dom";

const CustomLink: any = (to: string, className: string): JSX.Element => {
    return <a className={className} href={to}>+</a>
};

describe("<SideBar/>", () => {
    let wrapper: ReactWrapper<any, any>;
    let history: History;

    beforeEach(() => {
        history = createMemoryHistory();

        wrapper = mount(
            <Router history={history}>
                <SideBar>
                    <Link className="test" to="/"/>
                    <Link className="test" to="/contact"/>
                </SideBar>
            </Router>
        );

    });

    afterEach(() => wrapper.unmount());

    it("should set active class to link with url `/` when url = `/`", () => {
        history.push("/");

        expect(wrapper.find(Link).first().parent().getDOMNode().className).to.contain("is-active");
        expect(wrapper.find(Link).last().parent().getDOMNode().className).to.not.contain("is-active");
    });

    it("should set active class to link with url `/contact` when url = `/contact`", () => {
        history.push("/contact");

        expect(wrapper.find(Link).first().parent().getDOMNode().className).to.not.contain("is-active");
        expect(wrapper.find(Link).last().parent().getDOMNode().className).to.contain("is-active");
    });
});
