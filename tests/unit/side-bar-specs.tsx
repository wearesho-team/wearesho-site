import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {createMemoryHistory, History} from "history";

import {SideBar} from "../../src/components/Layout/Partials";

const CustomLink: any = (to: string, className: string): JSX.Element => {
    return <a className={className} href={to}>+</a>
};

describe("<SideBar/>", () => {
    let wrapper: ReactWrapper<any, any>;
    let history: History;

    beforeEach(() => {
        history = createMemoryHistory();

        wrapper = mount(
            <SideBar>
                <CustomLink className="test" to="/"/>
                <CustomLink className="test" to="/contact"/>
            </SideBar>, {context: {history}}
        );

    });

    afterEach(() => wrapper.unmount());

    it("should set active class to link with url `/` when url = `/`", () => {
        history.push("/");
        wrapper.setContext({history});

        expect(wrapper.find(CustomLink).first().parent().getDOMNode().className).to.contain("is-active");
        expect(wrapper.find(CustomLink).last().parent().getDOMNode().className).to.not.contain("is-active");
    });

    it("should set active class to link with url `/contact` when url = `/contact`", () => {
        history.push("/contact");
        wrapper.setContext({history});

        expect(wrapper.find(CustomLink).first().parent().getDOMNode().className).to.not.contain("is-active");
        expect(wrapper.find(CustomLink).last().parent().getDOMNode().className).to.contain("is-active");
    });
});
