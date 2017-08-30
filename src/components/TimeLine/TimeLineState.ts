import {ProjectInterface} from "../../data/Projects/ProjectInterface";

export interface TimeLineState {
    activeProject: ProjectInterface;
    pointPosition: number;
    sliderClassName: string;
}
