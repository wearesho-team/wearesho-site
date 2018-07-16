import { expect } from "chai";
import * as React from "react";
import { ReactWrapper, mount } from "enzyme";
import { createMemoryHistory, History } from "history";

import { Layout, LayoutProps, LayoutState } from "../../src/components/Layout";
import { LayoutContext } from "../../src/components/Layout/LayoutContext";
import { translate } from "../../src/helpers/translate";
import { Languages } from "../../src/data/Languages";

describe("<Layout>", () => {
    let wrapper: ReactWrapper<LayoutProps, LayoutState>;

    let history: History;

    beforeEach(() => {
        wrapper = mount(
            <Layout history={history = createMemoryHistory()} />
        );
    });

    afterEach(() => {
        localStorage.getItem = (arg: string) => arg;
        wrapper.unmount();
    });

    it("Should set next language on `change language`", () => {
        ((wrapper.instance() as any).getChildContext() as LayoutContext).setLanguage(Languages.en);
        expect(wrapper.instance().state.language).to.equal(Languages.en);
        expect(translate.getLocale()).to.equal(Languages.en);

        ((wrapper.instance() as any).getChildContext() as LayoutContext).setLanguage(Languages.ru);
        expect(wrapper.instance().state.language).to.equal(Languages.ru);
        expect(translate.getLocale()).to.equal(Languages.ru);
    });

    it("Should set language from localStorage on mount", () => {
        history.push("/process/project-design");

        localStorage.getItem = () => Languages.en;
        wrapper.unmount().mount();
        expect(wrapper.instance().state.language).to.equal(Languages.en);

        localStorage.getItem = () => Languages.ru;
        wrapper.unmount().mount();
        expect(wrapper.instance().state.language).to.equal(Languages.ru);
    });
});
