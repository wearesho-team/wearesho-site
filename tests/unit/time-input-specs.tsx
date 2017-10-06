import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {TimeInputProps, TimeInput} from "../../src/components/ContactPage/ContactForm/TimeInput";

describe("<TimeInput/>", () => {
    let wrapper: ReactWrapper<TimeInputProps, undefined>;
    let node: TimeInput;

    beforeEach(() => {
        wrapper = mount(<TimeInput/>);

        node = wrapper.instance() as any;
    });

    afterEach(() => {
        wrapper.unmount();
    });

    

});
