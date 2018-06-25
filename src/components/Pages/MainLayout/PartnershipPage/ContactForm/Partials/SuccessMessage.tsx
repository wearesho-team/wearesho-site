import * as React from "react";

import { translate } from "helpers/translate";

import { ContactFormData, ContactFormDataPropTypes } from "../ContactFormState";

export const SuccessMessage: React.SFC<ContactFormData> = (props: ContactFormData): JSX.Element => (
    <p className="section__text request request-sent">
        <span className="section__text_increased">{props.name}</span>
        <span className="inline">{translate("contactPage.form.submit.success.thanks")}</span>
        <span className="inline">{translate("contactPage.form.submit.success.callBack")}</span>
        <span className="section__text_indented">
            {translate("contactPage.form.time.from")}
            <span className="section__text_increased">&nbsp;{props.from}&nbsp;</span>
            {translate("contactPage.form.time.to")}
            <span className="section__text_increased">&nbsp;{props.to}&nbsp;</span>
        </span>
        <span>
            {translate("contactPage.form.submit.withRespect")} &laquo;{translate("SHO")}?!&raquo;
        </span>
    </p>
);

SuccessMessage.propTypes = ContactFormDataPropTypes;
