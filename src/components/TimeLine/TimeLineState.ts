import {ProjectInterface} from "../../data/Projects/ProjectInterface";

export interface TimeLineState {
    activeProject: ProjectInterface;
    sliderPosition: number;
    sliderClassName: string;
    activeElement: HTMLElement;
}
