import axios from "axios";

import {submitErrorHandler} from "./helpers/submitErrorHandler";

import {Config} from "./data/Config/Config";

axios.defaults.baseURL = Config.baseUrl;
axios.interceptors.response.use(
    (response) => response,
    submitErrorHandler
);
