import * as React from "react";

import { stages } from "data/ProjectStages/stages";
import { processRouteProps } from "data/routeProps";

import { PreloaderLinkButton } from "helpers/PreloaderLinkButton";
import { OnMobile } from "helpers/Breakpoints";
import { translate } from "helpers/translate";
import { toFixed } from "helpers/toFixed";

import { LayoutContext, LayoutContextTypes } from "components/Layout/LayoutContext";

export class Stages extends React.Component<React.HTMLProps<any>> {
    public static readonly contextTypes = LayoutContextTypes;

    public readonly context: LayoutContext;

    protected stageList: Array<{
        link: string;
        title: string;
        subTitle: string;
    }>;

    public constructor(props) {
        super(props);

        this.stageList = stages.map(({ title, subTitle }, i) => {
            return {
                title: translate(`processPage.stages.title.${title}`),
                subTitle: subTitle.map((item) => translate(`processPage.stages.subTitle.${item}`)).join(" / "),
                link: processRouteProps[i].path
            }
        });
    }

    public componentWillUpdate(P: any, S: undefined, nextContext: LayoutContext) {
        if (nextContext.language !== this.context.language) {
            this.stageList = stages.map(({ title, subTitle }, i) => {
                return {
                    title: translate(`processPage.stages.title.${title}`),
                    subTitle: subTitle.map((item) => translate(`processPage.stages.subTitle.${item}`)).join(" / "),
                    link: processRouteProps[i].path
                }
            });
        }
    }

    public render(): JSX.Element {
        return (
            <div {...this.props}>
                <div className="align-container">
                    {this.getStages(0, 3)}
                </div>
                <div className="stages-group">
                    {this.getStages(3, 3)}
                </div>
                <OnMobile>
                    <div className="process-structure_mob" />
                </OnMobile>
            </div>
        );
    }

    protected getStages(from: number, count: number): JSX.Element[] {
        return Array.from(this.stageList)
            .splice(from, count)
            .map(({ title, subTitle, link }, i) => {
                return (
                    <PreloaderLinkButton to={link} className="stage" key={i}>
                        <span className="stage__number marker">
                            {toFixed(2, i + from + 1)}
                        </span>
                        <div className="stage-body">
                            <h3 className="stage__title">{title}</h3>
                            <p className="stage__description">{subTitle}</p>
                            <span className="stage__detail">&gt;&gt;</span>
                        </div>
                    </PreloaderLinkButton>
                );
            });
    }

}
