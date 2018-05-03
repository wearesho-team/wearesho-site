// tslint:disable:no-submodule-imports
import "regenerator-runtime/runtime"
import "../../src/translations/en";
import "../../src/translations/ru";

import * as Enzyme from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";

import "./helpers/requestAnimationFrame";
import "./helpers/scrollTo";
import "./helpers/matchMedia";
import "./helpers/MutationObserver";
import "./helpers/localStorage";

Enzyme.configure({adapter: new Adapter()});

const placeholder = () => undefined;

require.extensions[".png"] = placeholder;
require.extensions[".jpg"] = placeholder;
