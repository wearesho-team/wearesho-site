import {MainPage} from "../components/Pages/MainPage";
import {PartnershipPage} from "../components/Pages/PartnershipPage";

export const routeProps = [
    {
        exact: true,
        path: "/",
        component: MainPage,
    },
    {
        exact: true,
        path: "/partnership",
        component: PartnershipPage,
    },
];
