import {Model} from "react-context-form";
import {IsDefined, IsEmail, IsString, Length, Matches, MaxLength, MinLength} from "class-validator";
import Match = Chai.Match;

export const NameMinLength = 2;
export const NameMaxLength = 24;

export const ContactFromDefaultValue = "09:00";
export const ContactToDefaultValue = "18:00";

export class ContactFormModel extends Model {
    @IsDefined()
    @Matches(/\d{9,}/, {
        message: "Некорректный телефон",
    })
    public phone;

    @IsDefined()
    @IsEmail({}, {
        message: "Некорректный E-Mail",
    })
    public mail;

    @IsDefined()
    @IsString()
    @MinLength(NameMinLength, {
        message: "Имя должно содержать не менее $constraint1 букв",
    })
    @MaxLength(NameMaxLength, {
        message: "Имя должно содержать не более $constraint1 букв",
    })
    public name;

    @IsDefined()
    @Matches(/\d{1,2}\:\d{2}/)
    public from = ContactFromDefaultValue;

    @IsDefined()
    @Matches(/\d{2}\:\d{2}/)
    public to = ContactToDefaultValue;

    public attributes(): string[] {
        return ["phone", "mail", "name", "from", "to",];
    }
}

export function instantiateContactFormModel() {
    return new ContactFormModel();
}