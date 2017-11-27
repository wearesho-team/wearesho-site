export interface Counterpart {
    (key: string | string[], options?: object): string;

    getLocale(): string;

    setLocale(value: string): string;

    registerTranslations(locale: string, data: object): void;
}

export const translate: Counterpart = require("counterpart");
