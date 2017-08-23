import * as chai from "chai";
import * as chaiEnzyme from "chai-enzyme";

chai.use(chaiEnzyme());

window.matchMedia = window.matchMedia || (() => {
    return {
        matches: true,
        addListener: () => undefined,
    };
}) as any;

const placeholder = () => undefined;
require.extensions[".png"] = placeholder;
require.extensions[".jpg"] = placeholder;
