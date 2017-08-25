import * as React from "react";
import {git} from "../../Icons/git";
import {behance} from "../../Icons/behance";
import {linkedin} from "../../Icons/linkedin";

export const SocialLinks = () => {
    return (
        <div className="social-list">
            <a href="#" className="social-list__item">
                {git}
            </a>
            <a href="#" className="social-list__item">
                {behance}
            </a>
            <a href="#" className="social-list__item">
                {linkedin}
            </a>
        </div>
    );
};
