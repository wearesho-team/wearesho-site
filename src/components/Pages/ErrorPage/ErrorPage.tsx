import * as React from "react";

import {translate} from "../../../helpers/translate";

import {ZeroIcon} from "../../Icons/ZeroIcon";

export class ErrorPage extends React.Component {
    
    public render() {
        return(
            <section className="section section-error">
                <div className="align-container">
                    <div className="error-number">
                        <span>4</span>
                        <div className="slider">
                            <div className="slider__body">
                                <ZeroIcon/>
                                <div className="slider__bar"/>
                                <div className="slider__dot"/>
                            </div>
                        </div>
                        <span>4</span>
                    </div>
                    <p className="error__text">
                        <span>{translate("errorPage.text1")}</span>
                        <span>{translate("errorPage.text2")}</span>
                    </p>
                    <p className="go-home">
                        <span>{translate("errorPage.text3")}</span>
                        <a href="/">{translate("errorPage.text4")}</a>
                    </p>
                </div>
            </section>
        );
    }
}
