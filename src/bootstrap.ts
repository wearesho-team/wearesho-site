import axios from "axios";

import {submitErrorHandler} from "./helpers/submitErrorHandler";

import {Config} from "./data/Config/Config";

axios.defaults.baseURL = Config.baseUrl;
axios.defaults.headers["accept-language"] = (window as any).language;
axios.interceptors.response.use(
    undefined,
    submitErrorHandler
);
