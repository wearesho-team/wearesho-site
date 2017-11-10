import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {ErrorBounder} from "../../src/components/ErrorBounder/ErrorBounder";
import {Router} from "react-router";
import {createMemoryHistory, History} from "history";

describe("<ErrorBounder/>", () => {
    let wrapper: ReactWrapper<undefined>;
    let history: History;

    beforeEach(() => {
        history = createMemoryHistory();

        wrapper = mount(
            <Router history={history}>
                <ErrorBounder>
                    <div/>
                </ErrorBounder>
            </Router>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should render error page if url wrong", () => {
        history.push("/view-1");

        expect(wrapper.children().getDOMNode().className).to.contain("section-error");

        history.push("/");

        expect(wrapper.children().getDOMNode().className).to.not.contain("section-error");
    });

});
