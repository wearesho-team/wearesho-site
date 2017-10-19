import {expect} from "chai";
import {setInitialLanguage} from "../../src/helpers/setInitialLanguage";
import {Languages} from "../../src/data/Languages";

describe("setInitialLanguage()", () => {

    it("Should return if local storage contain language", () => {
        localStorage.getItem = () => Languages.en;
        let setItemTriggered = false;
        localStorage.setItem = () => setItemTriggered = true;

        setInitialLanguage();
        expect(setItemTriggered).to.be.false;
    });

    it("Should set language from browser if local storage does not contain it", () => {
        localStorage.getItem = () => undefined;
        let setItemData = "";
        localStorage.setItem = (key: string, data: any) => setItemData = data;

        Object.defineProperty(navigator, "language", {
            configurable: true,
            get: () => "en"
        });

        setInitialLanguage();
        expect(setItemData).to.equal(Languages.en);
    });

    it("Should set `ru` language if local storage does not contain it and browser have unexpected language", () => {
        localStorage.getItem = () => undefined;
        let setItemData = "";
        localStorage.setItem = (key: string, data: any) => setItemData = data;

        Object.defineProperty(navigator, "language", {
            get: () => "ge"
        });

        setInitialLanguage();
        expect(setItemData).to.equal(Languages.ru);
    });
});
