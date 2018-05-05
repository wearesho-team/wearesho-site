import {MainPage} from "../components/Pages/MainPage";
import {BobraCSPage} from "../components/Pages/BobraCSPage";
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
        path: "/bobra-cs",
        component: BobraCSPage,
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
