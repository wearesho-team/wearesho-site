import axios from "axios";
import {Languages} from "../data/Languages";

export function setInitialLanguage(): void {
    const existLanguage = localStorage.getItem("app.language");

    if (existLanguage) {
        axios.defaults.headers["accept-language"] = Languages.hasOwnProperty(existLanguage)
            ? existLanguage
            : Languages.ru;
        return;
    }

    let browserLanguage = navigator.language || (navigator as any).userLanguage;
    browserLanguage = browserLanguage && browserLanguage.match(/(ru|en)/g, "");

    const siteLanguage = browserLanguage instanceof Array
        ? browserLanguage[0]
        : Languages.ru;

    localStorage.setItem("app.language", siteLanguage);
    axios.defaults.headers["accept-language"] = siteLanguage;
}
