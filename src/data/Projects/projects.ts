import {ProjectInterface} from "./ProjectInterface";
import {toFixed} from "../../helpers/toFixed";

export const projects: ProjectInterface [] = require("./projectsList.json")
    .sort((prev, next) => {
        const prevFormat = Number(`${prev.date.year}${toFixed(2, prev.date.month)}${toFixed(2, prev.date.day)}`);
        const nextFormat = Number(`${next.date.year}${toFixed(2, next.date.month)}${toFixed(2, next.date.day)}`);

        return prevFormat - nextFormat;
    });
