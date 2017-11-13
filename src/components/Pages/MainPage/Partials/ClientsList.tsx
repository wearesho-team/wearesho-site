import * as React from "react";

import {translate} from "../../../../helpers/translate";

export const ClientsList: React.SFC<undefined> = () => (
    <ul className="clients-list">
        <li className="clients-list__item">
            <a href="http://niko.ua/" className="clients-list__link">NIKO Holding</a>
            <span className="clients-list__text">
                {translate("hashTags.autodealer")}&nbsp;
                {translate("hashTags.logistics")}&nbsp;
                {translate("hashTags.finances")}
            </span>
        </li>
        <li className="clients-list__item">
            <a href="https://infinance.com.ua/" className="clients-list__link">Infinance</a>
            <span className="clients-list__text">
                {translate("hashTags.crediting")}&nbsp;
                {translate("hashTags.finances")}
            </span>
        </li>
    </ul>
);
