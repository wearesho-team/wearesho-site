import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {Grid, GridProps} from "../../src/components/Layout/Grid";

describe("<Grid/>", () => {

    let wrapper: ReactWrapper<GridProps, any>;

    beforeEach(() => wrapper = mount(<Grid/>));

});
