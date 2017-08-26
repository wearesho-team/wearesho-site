import * as React from "react";

import {GitIcon} from "../../Icons/GitIcon";
import {BehanceIcon} from "../../Icons/BehanceIcon";
import {LinkedinIcon} from "../../Icons/LinkedinIcon";

export const SocialLinks = () => {
    return (
        <div className="social-list">
            <a href="#" className="social-list__item">
               <GitIcon/>
            </a>
            <a href="#" className="social-list__item">
                <BehanceIcon/>
            </a>
            <a href="#" className="social-list__item">
                <LinkedinIcon/>
            </a>
        </div>
    );
};
