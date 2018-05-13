import { expect } from "chai";
import * as React from "react";
import { ReactWrapper, mount } from "enzyme";

import { MainPage } from "../../src/components/Pages/MainPage";
import { LayoutContext, LayoutContextTypes } from "../../src/components/Layout";
import { RouterContext, RouterContextTypes } from "../../src/data/RouterContext";
import { Languages } from "../../src/data/Languages";
import { Config } from "../../src/data/Config";
import { translate } from "../../src/helpers/translate";

describe("<MainPage/>", () => {
    let wrapper: ReactWrapper;

    const commonHandler = () => undefined;

    const context: LayoutContext & RouterContext = {
        language: Languages.en,
        setLanguage: commonHandler,
        router: {
            history: {
                push: commonHandler,
                createHref: commonHandler,
                replace: commonHandler,
                listen: commonHandler,
                location: "test"
            },
            route: {
                location: "test"
            }
        }
    };

    it("Should set text according to time", () => {
        wrapper = mount(<MainPage date={Config.foundationDate.getTime()} />,
            { context, childContextTypes: { ...LayoutContextTypes, ...RouterContextTypes } });
        expect(wrapper.getDOMNode().innerHTML).to.contains(0);
        wrapper.unmount();        

        wrapper = mount(<MainPage date={(Config.foundationDate.getTime() + 3600000)} />,
            { context, childContextTypes: { ...LayoutContextTypes, ...RouterContextTypes } });
        expect(wrapper.getDOMNode().innerHTML).to.contains(1);
        wrapper.unmount();

        wrapper = mount(<MainPage date={(Config.foundationDate.getTime() + 7200000)} />,
            { context, childContextTypes: { ...LayoutContextTypes, ...RouterContextTypes } });
        expect(wrapper.getDOMNode().innerHTML).to.contains(2);
        wrapper.unmount();
    });
});
