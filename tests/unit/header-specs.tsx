import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {Header} from "../../src/components/Layout/Partials";
import {LayoutContextValue} from "../../src/components/Layout/LayoutContext";
import {Languages} from "../../src/data/Languages";
import {RouterContext} from "../../src/data/RouterContext";

describe("<Header/>", () => {
    let wrapper: ReactWrapper<undefined, undefined>;

    const commonHandler = () => undefined;

    const context: LayoutContextValue & RouterContext = {
        language: Languages.en,
        setLanguage: (nextLanguage: Languages) => context.language = nextLanguage,
        router: {
            history: {
                push: commonHandler,
                listen: commonHandler,
                location: "test"
            },
            route: {
                location: "test"
            }
        }
    };

    beforeEach(() => {
        wrapper = mount(
            <Header/>,
            {context}
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
