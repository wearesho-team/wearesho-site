import {Model} from "react-context-form";
import {IsDefined, IsEmail, Matches} from "class-validator";

import {namePattern, NameRange, phonePattern, TimeDefaults} from "./common/Rules";

export class ContactFormModel extends Model {
    @Matches(phonePattern, {
        message: "Некорректный телефон",
        groups: ["phone"]
    })
    @IsDefined({
        message: "Обязательно для заполнения",
        groups: ["phone"]
    })
    public phone: string;

    @IsEmail({}, {
        message: "Некорректный E-Mail",
        groups: ["mail"]
    })
    @IsDefined({
        message: "Обязательно для заполнения",
        groups: ["mail"]
    })
    public mail: string;

    @Matches(namePattern, {
        message: `Только латиница или кириллица длинной от ${NameRange.min} до ${NameRange.max} символов`,
        groups: ["name"]
    })
    @IsDefined({
        message: "Обязательно для заполнения",
        groups: ["name"]
    })
    public name: string;

    @IsDefined({
        message: "Обязательно для заполнения",
        groups: ["from"]
    })
    public from: string = TimeDefaults.from;

    @IsDefined()
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
