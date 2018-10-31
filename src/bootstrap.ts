import axios from "axios";

import {submitErrorHandler} from "./helpers/submitErrorHandler";

import {Config} from "./data/Config/Config";

axios.defaults.baseURL = Config.baseUrl;
axios.defaults.headers["accept-language"] = (window as any).language;
axios.interceptors.response.use(
    undefined,
    submitErrorHandler
);

declare const BUILD_VERSION: string;
declare const BUILD_TIME: string;

// tslint:disable:no-console
console.log(`Build version: ${BUILD_VERSION}, build time: ${BUILD_TIME}`);
