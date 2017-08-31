import {ProjectInterface} from "./ProjectInterface";

// tslint:disable:no-var-requires
export const projects: ProjectInterface [] = require("./projects.json")
    .sort((prev, next) => parseInt(prev.date, 10) - parseInt(next.date, 10));
