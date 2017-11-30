import {Model, ModelError} from "react-context-form";
import {IsDefined, IsNotEmpty, Matches, validate, ValidationError, ValidationOptions} from "class-validator";

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

    public async validate(group?: string, options: ValidationOptions = {}): Promise<ModelError[]> {
        const newErrors = (await validate(
            this as any,
            {
                skipMissingProperties: true,
                ...options,
                ...(group ? {
                        groups: [group],
                    } : {}
                )
            }
        ))
            .map((error: ValidationError): ModelError => {
                return {
                    attribute: error.property,
                    details: Object.keys(error.constraints)
                        .map((key: string) => error.constraints[key])
                        .join(", "),
                };
            });

        const oldErrors = group === undefined
            ? []
            : this.errors.filter(({attribute}) => !(this.groups()[group] || []).includes(attribute));

        this.errors = [
            ...newErrors,
            ...oldErrors
        ];

        return group === undefined
            ? this.errors
            : newErrors;
    }
}

export function instantiateContactFormModel() {
    return new ContactFormModel();
}
