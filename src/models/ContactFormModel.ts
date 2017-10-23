import {Model} from "react-context-form";
import {IsDefined, IsEmail, Matches} from "class-validator";

import {namePattern, phonePattern, TimeDefaults, timePattern} from "./common/Rules";
import {translate} from "../helpers/translate";

export class ContactFormModel extends Model {
    @Matches(phonePattern, {
        message: () => translate("validation.incorrect.phone"),
        groups: ["phone"]
    })
    @IsDefined({
        message: () => translate("validation.empty"),
        groups: ["phone"]
    })
    public phone: string;

    @IsEmail({}, {
        message: () => translate("validation.incorrect.mail"),
        groups: ["mail"]
    })
    @IsDefined({
        message: () => translate("validation.empty"),
        groups: ["mail"]
    })
    public mail: string;

    @Matches(namePattern, {
        message: () => translate("validation.incorrect.name"),
        groups: ["name"]
    })
    @IsDefined({
        message: () => translate("validation.empty"),
        groups: ["name"]
    })
    public name: string;

    @Matches(timePattern, {
        message: () => translate("validation.incorrect.time"),
        groups: ["from"]
    })
    @IsDefined({
        message: () => translate("validation.empty"),
        groups: ["from"]
    })
    public from: string = TimeDefaults.from;

    @Matches(timePattern, {
        message: () => translate("validation.incorrect.time"),
        groups: ["to"]
    })
    @IsDefined({
        message: () => translate("validation.empty"),
        groups: ["to"]
    })
    public to: string = TimeDefaults.to;

    public attributes() {
        return ["phone", "mail", "name", "from", "to"];
    }

    public groups() {
        return {
            phone: ["phone"],
            mail: ["mail"],
            name: ["name"],
            from: ["from"],
            to: ["to"]
        }
    }
}

export function instantiateContactFormModel() {
    return new ContactFormModel();
}
