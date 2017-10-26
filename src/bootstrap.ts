import axios from "axios";
import {Config} from "./data/Config/Config";
import {submitErrorHandler} from "./helpers/submitErrorHandler";

axios.defaults.baseURL = Config.baseUrl;
axios.interceptors.response.use(
    (response) => response,
    submitErrorHandler
);