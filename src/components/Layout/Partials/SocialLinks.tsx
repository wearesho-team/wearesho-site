import * as React from "react";

import {Config} from "../../../Config";

import {GitIcon} from "../../Icons/GitIcon";
import {BehanceIcon} from "../../Icons/BehanceIcon";
import {LinkedinIcon} from "../../Icons/LinkedinIcon";

export const SocialLinks: React.SFC<undefined> = () => {
    return (
        <div className="social-list">
            <a href={Config.links.github} className="social-list__item" target="_blank">
                <GitIcon/>
            </a>
            <a href={Config.links.behance} className="social-list__item" target="_blank">
                <BehanceIcon/>
            </a>
            <a href={Config.links.linkedin} className="social-list__item" target="_blank">
                <LinkedinIcon/>
            </a>
        </div>
    );
};
