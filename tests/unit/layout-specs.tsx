import * as React from 'react';
import {expect} from 'chai';
import {mount, shallow} from 'enzyme';

import {createMemoryHistory, History} from 'history';

import {Layout} from '../../src/components/Layout';
import PreLoader from '../../src/components/PreLoader';
import {MainPage} from "../../src/components/pages/MainPage/MainPage";
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

    it('should render MainPage on `/`', () => {
        expect(wrapper.contains(<MainPage/>)).to.be.true;
    });

});