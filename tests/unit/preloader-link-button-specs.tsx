import { expect } from "chai";
import * as React from "react";
import { ReactWrapper, mount } from "enzyme";
import { useFakeTimers, SinonFakeTimers } from "sinon";

import { PreloaderLinkButton } from "../../src/components/Buttons/PreloaderLinkButton";
import { RouterContext, RouterContextTypes } from "../../src/data/RouterContext";
import { PreLoader } from "../../src/components/PreLoader";

describe("<PreloaderLinkButton/>", () => {
    let wrapper: ReactWrapper;
    let timer: SinonFakeTimers;

    const commonHandler = () => undefined;
    let location = "";
    const context: RouterContext = {
        router: {
            history: {
                push: (to: string) => {
                    location = to;
                },
                listen: commonHandler,
                location: "test"
            },
            route: {
                location: "test"
            }
        }
    };

    beforeEach(() => {
        commonHandler();
        wrapper = mount(
            <PreloaderLinkButton to="/location" />,
            { context, childContextTypes: RouterContextTypes }
        );

        timer = useFakeTimers();
    });

    afterEach(() => {
        location = "";
        timer.restore();
        wrapper.unmount();
    });

    it("Should set next location on click", () => {
        wrapper.simulate("click");

        timer.tick(PreLoader.duration);

        expect(location).to.equals("/location");
    });

});
