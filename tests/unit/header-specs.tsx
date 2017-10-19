import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {Header} from "../../src/components/Layout/Partials";
import {LayoutContext, LayoutContextTypes} from "../../src/components/Layout/LayoutContext";
import {Languages} from "../../src/data/Languages";
import {RouterContext, RouterContextTypes} from "../../src/data/RouterContext";

describe("<Header/>", () => {
    let wrapper: ReactWrapper<undefined, undefined>;

    const commonHandler = () => undefined;

    const context: LayoutContext & RouterContext = {
        language: Languages.en,
        setLanguage: (nextLanguage: Languages) => context.language = nextLanguage,
        router: {
            history: {
                push: commonHandler,
                createHref: commonHandler,
                replace: commonHandler
            }
        }
    };

    beforeEach(() => {
        wrapper = mount(
            <Header/>,
            {context, childContextTypes: {...LayoutContextTypes, ...RouterContextTypes}}
        );
    });

    afterEach(() => {
        context.language = Languages.en;
        wrapper.unmount();
    });

    it("Should set next language on `change lang` click", () => {
        let isDefaultPrevented = false;
        wrapper.find(".header__lang-toggle").simulate("click", {
            preventDefault: () => isDefaultPrevented = true,
        });

        expect(context.language).to.equal(Languages.ru);
        expect(isDefaultPrevented).to.be.true;

        wrapper.setContext(context);

        wrapper.find(".header__lang-toggle").simulate("click");

        expect(context.language).to.equal(Languages.en);
    });

});
