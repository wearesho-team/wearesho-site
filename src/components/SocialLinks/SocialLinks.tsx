import * as React from "react";
import {Icons} from "../Icons";

export const SocialLinks = () => {
    return (
        <div className="social-list">
            <a href="#" className="social-list__item">
                {Icons.git}
            </a>
            <a href="#" className="social-list__item">
                {Icons.behance}
            </a>
            <a href="#" className="social-list__item">
                {Icons.linkedin}
            </a>
        </div>
    );
};
