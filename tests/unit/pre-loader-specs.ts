import { expect } from "chai";

import { PreLoader } from "../../src/components/PreLoader";

describe("PreLoader animations", () => {

    it("should add `loaded` class on hiding", async () => {
        await PreLoader.hide();
        expect(document.body.className).to.contain("loaded");
    });

    it("should remove classes (`loaded`) on showing", async () => {
        expect(document.body.className).to.contain("loaded");
        await PreLoader.show();
        expect(document.body.className).to.not.contain("loaded");
    });

    it("should call `window.onBundleLoaded` on hiding", async () => {
        let isTriggered = false;
        (window as any).onBundleLoaded = () => isTriggered = true;

        await PreLoader.hide();
        expect(isTriggered).to.be.true;
    });
});
