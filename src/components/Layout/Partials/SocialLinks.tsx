import * as React from "react";

import { Config } from "../../../data/Config";

import { GitIcon } from "../../Icons/GitIcon";
import { BehanceIcon } from "../../Icons/BehanceIcon";
import { LinkedinIcon } from "../../Icons/LinkedinIcon";
import { TouchHover } from "../../../helpers/TouchHover";

export const SocialLinks: React.SFC<undefined> = (): JSX.Element => {
    return (
        <div className="social-list">
            <a
                href={Config.links.github}
                className="social-list__item"
                target="_blank"
                rel="nofollow noopener"
                {...TouchHover}
            >
                <GitIcon />
            </a>
            <a
                href={Config.links.linkedin}
                className="social-list__item"
                target="_blank"
                rel="nofollow noopener"
                {...TouchHover}
            >
                <LinkedinIcon />
            </a>
            <a
                href={Config.links.behance}
                className="social-list__item"
                target="_blank"
                rel="nofollow noopener"
                {...TouchHover}
            >
                <BehanceIcon />
            </a>
        </div>
    );
};
