import {DateInterface} from "./DateInterface";

export interface ProjectInterface {
    title: Array<{
        name: string,
        url: string
    }>,
    description: string [],
    date: DateInterface
}
