import * as React from "react";

import { MainPage } from "../components/Pages/MainPage";
import { ProcessPage } from "../components/Pages/ProcessPage";
import { BobraCSPage } from "../components/Pages/BobraCSPage";
import { PartnershipPage } from "../components/Pages/PartnershipPage";

export const routeProps = [
    {
        exact: true,
        path: "/",
        render: () => <MainPage date={(new Date()).getTime()} key="/" />
    },
    {
        exact: false,
        path: "/bobra-cs",
        render: () => <BobraCSPage key="/bobra-cs"/>,
    },
    {
        exact: false,
        path: "/process",
        render: () => <ProcessPage key="/process" />
    },
    {
        exact: false,
        path: "/partnership",
        render: () => <PartnershipPage key="/partnership" />
    }
];
