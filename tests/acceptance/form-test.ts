// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Form");

const contactLink = ".main-nav__link[href='/contact']";
const submitButton = "button.btn_primary[type='submit']";

const errorClass = ".form__group_has-error";
const focusClass = ".has-focus";

const timeout = 30;

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
    I.amOnPage("/");

    I.waitForElement(contactLink, timeout);
    I.waitForVisible(contactLink, timeout);
    I.click(contactLink);

    I.wait(1);

    I.waitForVisible(submitButton, timeout);
};

Scenario("Empty fields", async (I) => {
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
    init(I);

    // name
    I.fillField(Fields.name, WrongValues.name);
    I.seeInField(Fields.name, WrongValues.name.trim());

    // phone
    I.fillField(Fields.email, CorrectValues.email);
    // short
    I.fillField(Fields.phone, WrongValues.phone);
    I.click(submitButton);
    I.waitForElement(`${Wrappers.phone}${errorClass}`, timeout);
    // long
    I.fillField(Fields.phone, `${CorrectValues.phone}${WrongValues.phone}`);
    I.click(submitButton);
    I.seeInField(Fields.phone, CorrectValues.phone);

    // email
    I.fillField(Fields.phone, CorrectValues.phone);
    I.fillField(Fields.email, WrongValues.email);
    I.click(submitButton);
    I.waitForElement(`${Wrappers.email}${errorClass}`, timeout);
});
