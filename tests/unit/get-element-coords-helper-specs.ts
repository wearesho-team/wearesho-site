import { expect } from "chai";

import { getElementCoords } from "../../src/helpers/getElementCoords";

describe("getElementCoords()", () => {

    it("should return element coords according to body", () => {
        const element = document.createElement("div");

        element.getBoundingClientRect = () => {
            return {
                left: 10,
                top: 15
            } as ClientRect
        };

        Object.defineProperty(window, "pageYOffset", {
            get: () => {
                return 20;
            }
        });

        Object.defineProperty(window, "pageXOffset", {
            get: () => {
                return 25;
            }
        });

        Object.defineProperty(document, "documentElement", {
            get: () => {
                return {
                    clientTop: 30,
                    clientLeft: 35
                }
            }
        });

        expect(getElementCoords(element).left).to.equal(0);
        expect(getElementCoords(element).top).to.equal(5);
    });

});
