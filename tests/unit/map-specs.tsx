import * as React from "react";
import {expect} from "chai";
import {ReactWrapper, mount} from "enzyme";
import {useFakeTimers, SinonFakeTimers} from "sinon";

import {MapProps, Map, MapState} from "../../src/components/Widgets/Map";
import GoogleMapReact, {Coords} from "google-map-react";
import {Config} from "../../src/data/Config";
import {TransitionSwitch} from "../../src/components/TransitionSwitch";

describe("<Map/>", () => {
    let wrapper: ReactWrapper<MapProps, MapState>;
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

    it("Should add resize listener on map loaded", () => {
        timer.tick(animationDuration / 2);
        wrapper.mount();
        timer.tick(animationDuration / 2);

        expect((wrapper.getNode() as any).element).to.exist;

        // emulate that we receive map
        (wrapper.getNode() as any).element = {
            maps_: {
                event: {
                    addDomListener: (obj: any, event: string, func: () => any) => func(),
                }
            },
            map_: {
                setCenter: (obj: Coords) => undefined,
            }
        };

        // onGoogleApiLoaded event not working in test
        (wrapper.getNode() as any).onMapLoad();
    });
});
