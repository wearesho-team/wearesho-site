import axios from "axios";

import {Languages} from "../data/Languages";

export function setInitialLanguage(): void {
    const storedLanguage = localStorage.getItem("app.language");

    let initialLanguage;
    if (!storedLanguage) {
        let browserLanguage = navigator.language || (navigator as any).userLanguage;
        browserLanguage = browserLanguage && browserLanguage.match(/(ru|en)/g, "");

        initialLanguage = browserLanguage instanceof Array
            ? browserLanguage[0]
            : Languages.ru;

        localStorage.setItem("app.language", initialLanguage);
    } else {
        initialLanguage = Languages.hasOwnProperty(storedLanguage) ? storedLanguage : Languages.ru;
    }

    axios.defaults.headers["accept-language"] = initialLanguage;
    document.documentElement.lang = initialLanguage;
}
