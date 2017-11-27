import {ConfigInterface} from "./ConfigInterface";

export const Config: ConfigInterface = require("../../../config/config." + process.env.NODE_ENV + ".js");
