// tslint:disable-next-line
/// <reference path="./steps.d.ts" />
Feature("Form");

const contactLink = ".main-nav__link[href='/partnership']";
const submitButton = "button.btn_primary[type='submit']";

const errorClass = ".has-error";

const CorrectValues = {
    phone: "+38(050) 6453250",
    name: "name surname patronymic"
};

const WrongValues = {
    phone: "05060",
    name: "123456789123456789123456     "
};

const Wrappers = {
    name: ".form__group[data-name='name']",
    phone: ".form__group[data-name='phone']",
};

const Fields = {
    name: "input.form__control[name='name']",
    phone: "input.form__control[name='phone']",
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
    I.waitForElement(`${Wrappers.name}${errorClass}`, timeout);
    I.fillField(Fields.name, CorrectValues.name);

    // phone
    I.click(submitButton);
    I.waitForElement(`${Wrappers.phone}${errorClass}`, timeout);
    I.fillField(Fields.phone, CorrectValues.phone);
});

Scenario("Wrong fields", async (I) => {
    const timeout = 30;
    init(I);

    // name
    I.fillField(Fields.name, WrongValues.name);
    I.seeInField(Fields.name, WrongValues.name.trim());
});
