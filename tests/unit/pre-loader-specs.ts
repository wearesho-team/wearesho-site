import {PreLoader} from "../../src/components/PreLoader";
import {expect} from "chai";

describe("PreLoader animations", () => {
    const element = document.createElement("div");
    element.setAttribute("id", "preloader");

    const preLoader = new PreLoader(element);

    it("should add `loaded` class on hiding", async () => {
        await preLoader.hide();
        expect(document.body.className).to.equal("loaded");
    });

    it("should remove classes (`loaded`) on showing", async () => {
        expect(document.body.className).to.equal("loaded");
        await preLoader.show();
        expect(document.body.className).to.not.equal("loaded");
    });
});
