import {Model} from "react-context-form";
import {IsDefined, IsEmail, Matches, MaxLength, MinLength} from "class-validator";

import {NameRange, phonePattern, TimeDefaults} from "./common/Rules";

export class ContactFormModel extends Model {
    @Matches(phonePattern, {
        message: "Некорректный телефон",
        groups: ["phone"]
    })
    @IsDefined({
        message: "Обязательно для заполнения",
        groups: ["phone"]
    })
    public phone;

    @IsEmail({}, {
        message: "Некорректный E-Mail",
        groups: ["mail"]
    })
    @IsDefined({
        message: "Обязательно для заполнения",
        groups: ["mail"]
    })
    public mail;

    @MinLength(NameRange.min, {
        message: "Имя должно содержать не менее $constraint1 букв",
        groups: ["name"]
    })
    @MaxLength(NameRange.max, {
        message: "Имя должно содержать не более $constraint1 букв",
        groups: ["name"]
    })
    @IsDefined({
        message: "Обязательно для заполнения",
        groups: ["name"]
    })
    public name;

    @IsDefined()
    public from = TimeDefaults.from;

    @IsDefined()
    public to = TimeDefaults.to;

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
