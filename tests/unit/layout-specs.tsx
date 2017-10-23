import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {createMemoryHistory, History} from "history";

import {Layout, LayoutProps} from "../../src/components/Layout";
import {PreLoader} from "../../src/components/PreLoader";
import {MainPage} from "../../src/components/Pages/MainPage";
import {PartnershipPage} from "../../src/components/Pages/PartnershipPage";
import {SideBar, Header} from "../../src/components/Layout/Partials";
import {SoundSwitch} from "../../src/components/Layout/Partials/SoundSwitch";
import {getLinksWithProps} from "../../src/helpers/getLinksWithProps";
import {LayoutContext} from "../../src/components/Layout/LayoutContext";
import {Languages} from "../../src/data/Languages";
import {translate} from "../../src/helpers/translate";

const time = 500;

describe("<Layout>", () => {
    let wrapper: ReactWrapper<LayoutProps, any>;

    let history: History;

    const commonHandler = async () => undefined;

    beforeEach(() => {
        wrapper = mount(
            <Layout
                preLoader={new PreLoader(time)}
                history={history = createMemoryHistory()}
            />
        );
    });

    afterEach(() => {
        localStorage.getItem = (arg: string) => arg;
        wrapper.unmount();
    });

    it("should show preloader on unmount", async () => {
        let isShowTriggered = false;
        wrapper.setProps({
            preLoader: {
                hide: commonHandler,
                show: async () => {
                    isShowTriggered = true;
                }
            }
        });
        await (wrapper.mount().unmount() as any);
        expect(isShowTriggered).to.be.true;
    });

    it("should hide preloader on mount", async () => {
        let isHideTriggered = false;
        wrapper.setProps({
            preLoader: {
                hide: async () => {
                    isHideTriggered = true;
                },
                show: commonHandler
            }
        });
        await (wrapper.unmount().mount() as any);
        expect(isHideTriggered).to.be.true;
    });

    it("should render <MainPage/> on `/`", () => {

        expect(wrapper.contains(<MainPage/>)).to.be.true;
    });

    it("should render <PartnershipPage/> on `/partnership`", () => {

        history.push("/contact");
        expect(wrapper.contains(<PartnershipPage/>)).to.be.true;
    });

    it("should contain <SideBar/>,<Header/> and <SoundSwitch/> on each page", () => {
        const expectElementsExist = () => {
            expect(wrapper.contains(
                <SideBar>
                    {getLinksWithProps()}
                </SideBar>
            )).to.be.true;

            expect(wrapper.contains(<Header/>)).to.be.true;
            expect(wrapper.contains(<SoundSwitch/>)).to.be.true;
        };

        expectElementsExist();
        history.push("/contact");
        expectElementsExist();
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
        localStorage.getItem = () => Languages.en;
        wrapper.unmount().mount();
        expect(wrapper.instance().state.language).to.equal(Languages.en);

        localStorage.getItem = () => Languages.ru;
        wrapper.unmount().mount();
        expect(wrapper.instance().state.language).to.equal(Languages.ru);
    });
});
