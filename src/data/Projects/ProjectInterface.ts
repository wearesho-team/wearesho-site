import {DateInterface} from "./DateInterface";

export interface ProjectInterface {
    title: {
        name: string,
        url: string
    }[],
    description: string [],
    date: DateInterface
}
