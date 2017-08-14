import * as React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import {createMemoryHistory, History} from 'history';

import {Layout} from '../../src/components/Layout';
import PreLoader from '../../src/components/PreLoader';
import {MainPage} from "../../src/components/pages/MainPage/MainPage";
import {ContactPage} from "../../src/components/pages/ContactPage/ContactPage";
import {SideBar} from "../../src/components/SideBar";
import {Header} from "../../src/components/Header";
const preLoaderElement = document.getElementById('pre-loader');

describe('<Layout>', () => {
    let wrapper;

    let history: History;

    beforeEach(() => {
        wrapper = mount(
            <Layout preLoader={new PreLoader(preLoaderElement)}
                    history={history = createMemoryHistory()}
            />
        );
    });

    it('should render <MainPage/> on `/`', () => {

        expect(wrapper).to.containMatchingElement(<MainPage/>);
    });

    it('should render <ContactPage/> on `/contact`', () => {

        history.push('/contact');
        expect(wrapper).to.containMatchingElement(<ContactPage/>);
    });

    it('should contain <SideBar/> and <Header/> on each page', () => {

        expect(wrapper).to.containMatchingElement(<SideBar/>);
        expect(wrapper).to.containMatchingElement(<Header/>);
        history.push('/contact');
        expect(wrapper).to.containMatchingElement(<SideBar/>);
        expect(wrapper).to.containMatchingElement(<Header/>);
    })

});