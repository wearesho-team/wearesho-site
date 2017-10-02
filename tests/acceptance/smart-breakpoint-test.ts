// tslint:disable-next-line
/// <reference path="./steps.d.ts" />

Feature("Smart breakpoint");

// default 1600x1000
Scenario("Window resizing", async (I) => {
    I.amOnPage("/");

    I.waitForElement(".translate-container", 30);
    I.seeElementInDOM(".translate-container");
    I.dontSeeElementInDOM(".scroll-container");

    I.resizeWindow(1200, 1000);

    I.waitForElement(".scroll-container", 30);
    I.seeElementInDOM(".scroll-container");
    I.dontSeeElementInDOM(".translate-container");

    I.resizeWindow(1600, 1000);

    I.waitForElement(".translate-container", 30);
    I.seeElementInDOM(".translate-container");
    I.dontSeeElementInDOM(".scroll-container");
});
