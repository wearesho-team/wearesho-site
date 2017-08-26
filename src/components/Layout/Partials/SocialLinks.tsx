import * as React from "react";

import {GitIcon} from "../../Icons/GitIcon";
import {BehanceIcon} from "../../Icons/BehanceIcon";
import {LinkedinIcon} from "../../Icons/LinkedinIcon";

export const SocialLinks: React.SFC<undefined> = () => {
    return (
        <div className="social-list">
            <a href="https://github.com/wearesho-team" className="social-list__item" target="_blank">
                <GitIcon/>
            </a>
            <a href="#" className="social-list__item" target="_blank">
                <BehanceIcon/>
            </a>
            <a href="https://ru.linkedin.com/company/студия-«шо-»" className="social-list__item" target="_blank">
                <LinkedinIcon/>
            </a>
        </div>
    );
};
