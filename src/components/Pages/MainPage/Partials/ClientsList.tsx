import * as React from "react";

import {translate} from "../../../../helpers/translate";

export const ClientsList: React.SFC<undefined> = () => (
    <ul className="clients-list">
        <li className="clients-list__item">
            <a
                href="http://niko.ua/"
                className="clients-list__link"
                target="_blank"
                rel="nofollow noopener"
            >
                NIKO Holding
            </a>
            <span className="clients-list__text">
                {translate("hashTags.autodealer")}&nbsp;
                {translate("hashTags.logistics")}&nbsp;
                {translate("hashTags.finances")}
            </span>
        </li>
        <li className="clients-list__item">
            <a
                href="https://infinance.com.ua/"
                className="clients-list__link text_upper"
                target="_blank"
                rel="nofollow noopener"
            >
                Infinance
            </a>
            <span className="clients-list__text">
                {translate("hashTags.crediting")}&nbsp;
                {translate("hashTags.finances")}
            </span>
        </li>
        <li className="clients-list__item">
            <a
                href="http://www.aim-partners.com/"
                className="clients-list__link"
                target="_blank"
                rel="nofollow noopener"
            >
                AIM Group
            </a>
            <span className="clients-list__text">
                {translate("hashTags.consulting")}&nbsp;
                {translate("hashTags.finances")}
            </span>
        </li>
        <li className="clients-list__item">
            <span className="clients-list__link">
                City Gold
            </span>
            <span className="clients-list__text">
                {translate("hashTags.realEstate")}&nbsp;
                {translate("hashTags.crediting")}
            </span>
        </li>
    </ul>
);
