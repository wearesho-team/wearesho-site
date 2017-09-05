import {MainPage} from "../components/MainPage";
import {ContactPage} from "../components/ContactPage";

export const routeProps = [
    {
        exact: true,
        path: "/",
        component: MainPage,
    },
    {
        exact: false,
        path: "/contact",
        component: ContactPage,
    },
    {
        exact: false,
        path: "/testPage1",
        component: MainPage,
    },
    {
        exact: false,
        path: "/testPage2",
        component: ContactPage,
    },
];
