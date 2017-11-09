import * as React from "react";

import {translate} from "../../../../helpers/translate";

export class ClientsList extends React.Component<undefined, undefined> {

    public render(): JSX.Element {
        return (
            <ul className="clients-list">
                <li className="clients-list__item">
                    <a href="#" className="clients-list__link">NIKO Holding</a>
                    <span className="clients-list__text">
                        {translate("hashTags.autodealer")}&nbsp;
                        {translate("hashTags.logistics")}&nbsp;
                        {translate("hashTags.finances")}
                    </span>
                </li>
                <li className="clients-list__item">
                    <a href="#" className="clients-list__link">Infinance</a>
                    <span className="clients-list__text">
                        {translate("hashTags.crediting")}&nbsp;
                        {translate("hashTags.finances")}
                    </span>
                </li>
            </ul>
        );
    }
}
