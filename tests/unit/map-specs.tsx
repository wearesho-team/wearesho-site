import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";

import {MapProps, Map} from "../../src/components/Widgets/Map";
import GoogleMapReact from "google-map-react";
import {Config} from "../../src/data/Config";

describe("<Map/>", () => {

    let wrapper: ReactWrapper<MapProps, any>;

    beforeEach(() => wrapper = mount(<Map/>));

    afterEach(() => wrapper.unmount());

    // TODO: lang assertion

    it("should contain GoogleMapReact with current lang and key props", () => {
        expect((wrapper.find(GoogleMapReact).props().bootstrapURLKeys as any).key).to.equal(Config.mapApiKey);
        expect(wrapper.find(GoogleMapReact).props().bootstrapURLKeys.language).to.equal("en");
    });

});
