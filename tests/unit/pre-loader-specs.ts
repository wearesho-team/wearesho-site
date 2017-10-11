import {PreLoader} from "../../src/components/PreLoader";
import {expect} from "chai";
const time = 500;
describe("PreLoader animations", () => {
    const preLoader = new PreLoader(time);

    it("should add `loaded` class on hiding", async () => {
        await preLoader.hide();
        expect(document.body.className).to.contain("loaded");
    });

    it("should remove classes (`loaded`) on showing", async () => {
        expect(document.body.className).to.contain("loaded");
        await preLoader.show();
        expect(document.body.className).to.not.contain("loaded");
    });

    it("should call `window.onBundleLoaded` on hiding", async () => {
        let isTriggered = false;
        (window as any).onBundleLoaded = () => isTriggered = true;

        await preLoader.hide();
        expect(isTriggered).to.be.true;
    });
});
