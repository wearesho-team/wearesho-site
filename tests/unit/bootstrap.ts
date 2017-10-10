import "babel-polyfill";

import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import "./helpers/requestAnimationFrame";
import "./helpers/scrollTo";
import "./helpers/matchMedia";
import "./helpers/MutationObserver";

Enzyme.configure({ adapter: new Adapter() });

process.env.NODE_ENV = process.env.NODE_ENV || "test";

const placeholder = () => undefined;

require.extensions[".png"] = placeholder;
require.extensions[".jpg"] = placeholder;
