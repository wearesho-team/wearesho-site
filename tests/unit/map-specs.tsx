import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {MapProps, Map} from "../../src/components/Widgets/Map";
import GoogleMapReact from "google-map-react";
import {Config} from "../../src/data/Config";
import {TransitionSwitch} from "../../src/components/TransitionSwitch";

describe("<Map/>", () => {
    let wrapper: ReactWrapper<MapProps, any>;
    let timer: SinonFakeTimers;

    const additionalDuration = 100;
    const animationDuration = TransitionSwitch.animationDuration + additionalDuration;

    beforeEach(() => {
        timer = useFakeTimers();

        wrapper = mount(<Map/>);
    });

    afterEach(() => {
        wrapper.unmount();
        timer.restore();
    });

    // TODO: lang assertion

    it("should contain GoogleMapReact with current lang and key props", () => {

        timer.tick(animationDuration / 2);
        wrapper.mount();
        expect(wrapper.find(GoogleMapReact)).to.not.exist;

        timer.tick(animationDuration / 2);

        expect((wrapper.find(GoogleMapReact).props().bootstrapURLKeys as any).key).to.equal(Config.mapApiKey);
        expect(wrapper.find(GoogleMapReact).props().bootstrapURLKeys.language).to.equal("en");
    });

});
