import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {createMemoryHistory, History} from "history";

import {Layout, LayoutProps} from "../../src/components/Layout";
import {PreLoader} from "../../src/components/PreLoader";
import {MainPage} from "../../src/components/MainPage";
import {ContactPage} from "../../src/components/ContactPage";
import {SideBar, Header} from "../../src/components/Layout/Partials";
import {SoundSwitch} from "../../src/components/Layout/SoundSwitch";
import {getLinksWithProps} from "../../src/helpers/getLinksWithProps";

describe("<Layout>", () => {
    let wrapper: ReactWrapper<LayoutProps, any>;

    let history: History;

    beforeEach(() => {
        wrapper = mount(
            <Layout
                preLoader={new PreLoader()}
                history={history = createMemoryHistory()}
            />
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("should show preloader on unmount", () => {
        let isShowTriggered = false;
        wrapper.setProps({
            preLoader: {
                hide: async () => undefined,
                show: async () => {
                    isShowTriggered = true;
                }
            }
        });
        wrapper.unmount().mount();
        expect(isShowTriggered).to.be.true;
    });

    it("should hide preloader on mount", () => {
        let isHideTriggered = false;
        wrapper.setProps({
            preLoader: {
                hide: async () => {
                    isHideTriggered = true;
                },
                show: async () => undefined,
            }
        });
        wrapper.unmount().mount();
        expect(isHideTriggered).to.be.true;
    });

    it("should render <MainPage/> on `/`", () => {

        expect(wrapper.contains(<MainPage/>)).to.be.true;
    });

    it("should render <ContactPage/> on `/contact`", () => {

        history.push("/contact");
        expect(wrapper.contains(<ContactPage/>)).to.be.true;
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
});
