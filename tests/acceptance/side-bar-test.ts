// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Side bar");

Scenario("Menu navigation", async (I) => {
    const timeout = 30;
    I.amOnPage("/");
    I.waitForElement("body.loaded", timeout);
    I.wait(2);

    I.waitForElement(`.main-nav__link[href="/partnership"]`, timeout);
    I.wait(1);
    I.click(`.main-nav__link[href="/partnership"]`);
    I.waitForElement(".section-partnership", timeout);

    I.waitForElement(`.main-nav__link[href="/"]`, timeout);
    I.wait(1);
    I.click(`.main-nav__link[href="/"]`);
    I.waitForElement(".section-main", timeout);
});
