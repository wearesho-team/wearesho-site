import {Languages} from "../data/Languages";

export function setInitialLanguage(): void {
    if (localStorage.getItem("app.language")) {
        return;
    }

    let browserLanguage = navigator.language || (navigator as any).userLanguage;
    browserLanguage = browserLanguage && browserLanguage.match(/(ru|en)/g, "");

    localStorage.setItem("app.language", (browserLanguage && browserLanguage[0]) || Languages.ru);
}
