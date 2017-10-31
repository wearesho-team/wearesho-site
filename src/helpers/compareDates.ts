import {DateInterface} from "../data/Projects/DateInterface";

export function compareDates(dateOne: DateInterface, dateTwo: DateInterface): boolean {
    return !!Object.keys(dateOne).filter((field) => dateTwo[field] !== dateOne[field]).length;
}
