// tslint:disable-next-line
/// <reference path="./steps.d.ts" />
Feature("Form");

const contactLink = ".main-nav__link[href='/partnership']";
const submitButton = "button.btn_primary[type='submit']";

const errorClass = ".form__group_has-error";
const focusClass = ".has-focus";

const CorrectValues = {
    phone: "+38(050) 6453250",
    email: "email@email.com.ua",
    name: "name surname patronymic"
};

const WrongValues = {
    phone: "05060",
    email: "email2email.com.ua",
    name: "123456789123456789123456     "
};

const Wrappers = {
    name: ".form-half > .form__group:nth-child(1)",
    phone: ".form-half > .form__group_inline:nth-child(2) > .form__group:nth-child(1)",
    email: ".form-half > .form__group_inline:nth-child(2) > .form__group:nth-child(2)"
};

const Fields = {
    name: "input.form__control[name='name']",
    phone: "input.form__control[name='phone']",
    email: "input.form__control[name='mail']"
};

const init = (I) => {
    const timeout = 30;
    I.amOnPage("/");

    I.waitForElement(contactLink, timeout);
    I.waitForVisible(contactLink, timeout);
    I.click(contactLink);

    I.wait(1);

    I.waitForVisible(submitButton, timeout);
};

Scenario("Empty fields", async (I) => {
    const timeout = 30;
    init(I);

    // name
    I.click(submitButton);
    I.waitForElement(`${Wrappers.name}${focusClass}`, timeout);
    I.fillField(Fields.name, CorrectValues.name);

    // phone
    I.click(submitButton);
    I.waitForElement(`${Wrappers.phone}${focusClass}`, timeout);
    I.fillField(Fields.phone, CorrectValues.phone);

    // email
    I.click(submitButton);
    I.waitForElement(`${Wrappers.email}${focusClass}`, timeout);
    I.fillField(Fields.email, CorrectValues.email);
});

Scenario("Wrong fields", async (I) => {
    const timeout = 30;
    init(I);

    // name
    I.fillField(Fields.name, WrongValues.name);
    I.seeInField(Fields.name, WrongValues.name.trim());

    // phone
    // short
    I.fillField(Fields.phone, WrongValues.phone);
    I.click(submitButton);
    I.waitForElement(`${Wrappers.phone}${errorClass}`, timeout);
    // long
    I.fillField(Fields.phone, `${CorrectValues.phone}${WrongValues.phone}`);
    I.waitForElement(`${Wrappers.phone}${errorClass}`, timeout);

    // email
    I.fillField(Fields.phone, CorrectValues.phone);
    I.fillField(Fields.email, WrongValues.email);
    I.waitForElement(`${Wrappers.email}${errorClass}`, timeout);
});
