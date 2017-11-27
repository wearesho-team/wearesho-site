import * as React from "react";

import {translate} from "../../../../../helpers/translate";

import {ContactFormData, ContactFormDataPropTypes} from "../ContactFormState";

export const ErrorMessage: React.SFC<ContactFormData> = (props: ContactFormData): JSX.Element => (
    <p className="section__text request request-error">
        <span className="section__text_increased">{props.name}</span>
        <span>{translate("contactPage.form.submit.fail.text")}</span>
        <span>
            {translate("contactPage.form.submit.withRespect")} &laquo;{translate("SHO")}?!&raquo;
        </span>
    </p>
);

ErrorMessage.propTypes = ContactFormDataPropTypes;
