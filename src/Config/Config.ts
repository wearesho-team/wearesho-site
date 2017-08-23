import {ConfigInterface} from "./ConfigInterface";

// tslint:disable:no-var-requires
export const Config: ConfigInterface = require("../../config/config." + process.env.NODE_ENV + ".js");
