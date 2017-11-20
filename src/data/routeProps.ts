import {MainPage} from "../components/Pages/MainPage";
import {PartnershipPage} from "../components/Pages/PartnershipPage";
import {ProcessPage} from "../components/Pages/ProcessPage";

export const routeProps = [
    {
        exact: true,
        path: "/",
        component: MainPage,
    },
    {
        exact: false,
        path: "/process",
        component: ProcessPage,
    },
    {
        exact: false,
        path: "/partnership",
        component: PartnershipPage,
    }
];
