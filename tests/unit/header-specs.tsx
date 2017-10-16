import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {Header} from "../../src/components/Layout/Partials";
import {LayoutContext} from "../../src/components/Layout/LayoutContext";
import {Languages} from "../../src/data/Languages";

describe("<Header/>", () => {
    let wrapper: ReactWrapper<undefined, undefined>;

    const context: LayoutContext = {
        language: Languages.en,
        setLanguage: (nextLanguage: Languages) => context.language = nextLanguage
    };

    beforeEach(() => {
        wrapper = mount(<Header/>, {context});
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
    });

});
