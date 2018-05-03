import * as React from "react";

import { MainPage } from "../components/Pages/MainPage";
import { PartnershipPage } from "../components/Pages/PartnershipPage";
import { ProcessPage } from "../components/Pages/ProcessPage";

export const routeProps = [
    {
        exact: true,
        path: "/",
        render: () => <MainPage date={(new Date()).getTime()} key="/"/>
    },
    {
        exact: false,
        path: "/process",
        render: () => <ProcessPage key="/process"/>
    },
    {
        exact: false,
        path: "/partnership",
        render: () => <PartnershipPage key="/partnership"/>
    }
];
