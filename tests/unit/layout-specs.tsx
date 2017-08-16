import * as React from 'react';
import {expect} from 'chai';
import {ReactWrapper, mount} from 'enzyme';

import {createMemoryHistory, History} from 'history';

import {Layout} from '../../src/components/Layout';
import {PreLoader} from '../../src/components/PreLoader';
import {MainPage} from "../../src/components/MainPage";
import {ContactPage} from "../../src/components/ContactPage";
import {SideBar, Header} from "../../src/components/Layout/Partials";
import {SoundSwitch} from '../../src/components/Layout/SoundSwitch';
import {Grid} from '../../src/components/Layout/Grid';
import {LayoutProps} from "../../src/components/Layout";
const preLoaderElement = document.getElementById('pre-loader');

describe('<Layout>', () => {
    let wrapper: ReactWrapper<LayoutProps, any>;

    let history: History;

    beforeEach(() => {
        wrapper = mount(
            <Layout preLoader={new PreLoader(preLoaderElement)}
                    history={history = createMemoryHistory()}
            />
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should show preloader on unmount', () => {
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

    it('should hide preloader on mount', () => {
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

    it('should render <MainPage/> on `/`', () => {

        expect(wrapper).to.containMatchingElement(<MainPage/>);
    });

    it('should render <ContactPage/> on `/contact`', () => {

        history.push('/contact');
        expect(wrapper).to.containMatchingElement(<ContactPage/>);
    });

    it('should contain <SideBar/>,<Header/> and <SoundSwitch/> on each page', () => {

        const expectElementsExist = () => {
            expect(wrapper).to.containMatchingElement(<SideBar/>);
            expect(wrapper).to.containMatchingElement(<Header/>);
            expect(wrapper).to.containMatchingElement(<SoundSwitch/>);
            expect(wrapper).to.containMatchingElement(<Grid/>);
        };

        expectElementsExist();
        history.push('/contact');
        expectElementsExist();
    });
});