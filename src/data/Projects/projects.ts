import {ProjectInterface} from "./ProjectInterface";

// tslint:disable:no-var-requires
export const projects: ProjectInterface [] = require("./projectsList.json")
    .sort((prev, next) => {
        const prevStringFormat = Object.keys(prev.date).map((key) => prev.date[key]).join("");
        const nextStringFormat = Object.keys(next.date).map((key) => next.date[key]).join("");

        return prevStringFormat > nextStringFormat;
    });
