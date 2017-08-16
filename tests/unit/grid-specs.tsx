import * as React from 'react';
import {expect} from 'chai';
import {ReactWrapper, mount} from 'enzyme';

import {Grid} from '../../src/components/Layout/Grid';
import {GridProps} from "../../src/components/Layout/Grid";

describe('<Grid/>', () => {

    let wrapper: ReactWrapper<GridProps, any>;

    beforeEach(() => wrapper = mount(<Grid/>));

    it('should rendering with 6 columns if props unset', () => {

        expect(wrapper.getDOMNode().children).to.have.length(6);
    });

    it('should rendering with 4 columns if props.size = 4', () => {
        wrapper.setProps({
            size: 4
        });

        expect(wrapper.getDOMNode().children).to.have.length(4);
    });

});