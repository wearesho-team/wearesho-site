import {MainPage} from "../components/Pages/MainPage";
import {PartnershipPage} from "../components/Pages/PartnershipPage";
import {ErrorPage} from "../components/Pages/ErrorPage/ErrorPage";

export const routeProps = [
    {
        exact: true,
        path: "/",
        component: MainPage,
    },
    {
        exact: false,
        path: "/partnership",
        component: PartnershipPage,
    },
    {
        exact: false,
        path: "/404",
        component: ErrorPage,
    }
];
