import * as React from "react";

import { translate } from "helpers/translate";

import { MainPage, BobraCSPage, ProcessPage, PartnershipPage } from "components/Pages/MainLayout";
import {
    CustomerSupportPage,
    ProjectDesignPage,
    DevelopmentPage,
    DeploymentPage,
    PromotionPage,
    DesignPage
} from "components/Pages/ProcessLayout";

export const mainRouteProps = [
    {
        exact: true,
        path: "/",
        render: () => <MainPage date={(new Date()).getTime()} key="/" />
    },
    {
        exact: false,
        path: "/bobra-cs",
        render: () => <BobraCSPage key="/bobra-cs" />,
    },
    {
        exact: true,
        path: "/process",
        render: () => <ProcessPage key="/process" />
    },
    {
        exact: false,
        path: "/partnership",
        render: () => <PartnershipPage key="/partnership" />
    }
];

export const processRouteProps = [
    {
        exact: false,
        path: "/process/project-design",
        label: translate("processPage.stages.title.planning"),
        render: () => <ProjectDesignPage key="/process/project-design" />
    },
    {
        exact: true,
        path: "/process/design",
        label: translate("processPage.stages.title.design"),
        render: () => <DesignPage key="/process/design" />
    },
    {
        exact: false,
        path: "/process/development",
        label: translate("processPage.stages.title.develop"),
        render: () => <DevelopmentPage key="/process/development" />
    },
    {
        exact: false,
        path: "/process/deployment",
        label: translate("processPage.stages.title.deploy"),
        render: () => <DeploymentPage key="/process/deployment" />
    },
    {
        exact: false,
        path: "/process/promotion",
        label: translate("processPage.stages.title.promotion"),
        render: () => <PromotionPage key="/process/promotion" />
    },
    {
        exact: false,
        path: "/process/customer-support",
        label: translate("processPage.stages.title.support"),
        render: () => <CustomerSupportPage key="/process/customer-support" />
    }
];
