import * as chai from "chai";
import * as chaiEnzyme from "chai-enzyme";
import "./helpers/matchMedia";

chai.use(chaiEnzyme());

process.env.NODE_ENV = "test";

const placeholder = () => undefined;
require.extensions[".png"] = placeholder;
require.extensions[".jpg"] = placeholder;
