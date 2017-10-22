import axios from "axios";
import {Config} from "./data/Config/Config";

axios.defaults.baseURL = Config.baseUrl;
