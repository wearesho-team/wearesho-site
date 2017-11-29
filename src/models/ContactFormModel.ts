import {Model} from "react-context-form";
import {IsDefined, IsNotEmpty, Matches} from "class-validator";

import {translate} from "../helpers/translate";

import {namePattern, TimeDefaults, timePattern} from "./common/Rules";

export class ContactFormModel extends Model {
    @IsNotEmpty({
        message: () => translate("validation.empty.phone"),
        groups: ["phone"]
    })
    @IsDefined({
        message: () => translate("validation.empty.phone"),
        groups: ["phone"]
    })
    public phone: string;

    public comment: string;

    @Matches(namePattern, {
        message: () => translate("validation.incorrect.name"),
        groups: ["name"]
    })
    @IsNotEmpty({
        message: () => translate("validation.empty.name"),
        groups: ["name"]
    })
    @IsDefined({
        message: () => translate("validation.empty.name"),
        groups: ["name"]
    })
    public name: string;

    @Matches(timePattern, {
        message: () => translate("validation.incorrect.time"),
        groups: ["from"]
    })
    public from: string = TimeDefaults.from;

    @Matches(timePattern, {
        message: () => translate("validation.incorrect.time"),
        groups: ["to"]
    })
    public to: string = TimeDefaults.to;

    public attributes() {
        return ["phone", "comment", "name", "from", "to"];
    }

    public groups() {
        return {
            phone: ["phone"],
            comment: ["comment"],
            name: ["name"],
            from: ["from"],
            to: ["to"]
        }
    }

}

export function instantiateContactFormModel() {
    return new ContactFormModel();
}
