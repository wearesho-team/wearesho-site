import {MainPage} from "../components/MainPage";
import {ContactPage} from "../components/ContactPage";
import {ProcessPage} from "../components/ProcessPage";

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
    }
];
