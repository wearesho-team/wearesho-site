// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Side bar");

Scenario("Menu navigation", async (I) => {
    I.amOnPage("/");
    I.waitForElement(".section-main", 30);

    I.waitForElement(`.main-nav__link[href="/contact"]`);
    I.click(`.main-nav__link[href="/contact"]`);
    I.waitForElement(".section-partnership", 2);

    I.waitForElement(`.main-nav__link[href="/"]`);
    I.click(`.main-nav__link[href="/"]`);
    I.waitForElement(".section-main", 2);
});
