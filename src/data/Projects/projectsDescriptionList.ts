// tslint:disable
import {ProjectInterface} from "./ProjectInterface";

const currentDate = new Date();

export const projectsList: ProjectInterface [] = [
    {
        title: [
            {
                name: "project1_1",
                url: "https://google.com"
            },
            {
                name: "project1_2",
                url: "https://yahoo.com"
            }
        ],
        description: "test1 / test1 / test1",
        date: {
            day: "12",
            month: "9",
            year: "2015"
        }
    },
    {
        title: [
            {
                name: "project2_1",
                url: "https://google.com"
            },
            {
                name: "project2_2",
                url: "https://yahoo.com"
            }
        ],
        description: "test2 / test2 / test2",
        date: {
            day: "12",
            month: "2",
            year: "2016"
        }
    },
    {
        title: [
            {
                name: "Current1",
                url: "https://google.com"
            },
            {
                name: "Current2",
                url: "https://yahoo.com"
            },
            {
                name: "Current3",
                url: "https://google.com"
            },
            {
                name: "Current4",
                url: "https://yahoo.com"
            }
        ],
        description: "test3 / test3 / test3",
        date: {
            day: String(currentDate.getDay()),
            month: String(currentDate.getMonth()),
            year: String(currentDate.getFullYear())
        },
    },
];
