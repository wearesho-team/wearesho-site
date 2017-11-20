import {ProjectInterface} from "./ProjectInterface";

// tslint:disable:no-var-requires
export const projects: ProjectInterface [] = require("./projectsList.json")
    .sort((prev, next) => {
        const prevStringFormat = Number(`${prev.date.year}${prev.date.month}${prev.date.day}`);
        const nextStringFormat = Number(`${next.date.year}${next.date.month}${next.date.day}`);

        return prevStringFormat - nextStringFormat;
    });
