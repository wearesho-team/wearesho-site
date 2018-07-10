import { expect } from "chai";
import * as React from "react";
import { ReactWrapper, mount } from "enzyme";

const path = require("path");

import { ImageLoader } from "../../src/components/ImageLoader";

describe("<MainPage/>", () => {
    let wrapper: ReactWrapper;

    beforeEach(() => {
        wrapper = mount(
            <ImageLoader imageStack={[
                path.resolve("images/bobraCS-20.jpg"),
                path.resolve("images/bobraCS-40.jpg")
            ]} />
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("Should load next image on load current", () => {
        const image = wrapper.find("img").get(1);
        image.props.onLoad();
        wrapper.update();
        expect(wrapper.find("img").get(0).props.src).to.equal(image.props.src);
    });

});
