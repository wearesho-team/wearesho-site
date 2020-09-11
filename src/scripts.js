// tslint:disable
// IOS 9 issue
(function() {
    var d = document;
    var c = d.createElement('script');
    if (!('noModule' in c) && 'onbeforeload' in c) {
        var s = false;
        d.addEventListener('beforeload', function(e) {
            if (e.target === c) {
                s = true;
            } else if (!e.target.hasAttribute('nomodule') || !s) {
                return;
            }
            e.preventDefault();
        }, true);

        c.type = 'module';
        c.src = '.';
        d.head.appendChild(c);
        c.remove();
    }
}());

// preloader
var hideTimeout = 1000;
(function () {
    var percents = 0;
    var indicators = document.getElementsByClassName("grow-element");
    var timer;
    var content = document.getElementById("content-overlay");

    // triggering form PreLoaded component
    window.onBundleLoaded = function () {
        // now control take CSS
        clearTimeout(timer);
        increase = undefined;

        content.removeAttribute("style");
        setTimeout(function () {
            for (var i = 0; i < indicators.length; i++) {
                indicators.item(i).removeAttribute("style");
            }
        }, hideTimeout);
    };

    function increase() {
        timer = setTimeout(function () {
            percents++;
            for (var i = 0; i < indicators.length; i++) {
                indicators.item(i).style.top = 50 - (percents / 2) + "%";
                indicators.item(i).style.bottom = 50 - (percents / 2) + "%";
            }

            increase && (percents < 85) && increase();
        }, percents * (percents / 5));
    }

    increase();
}());

//initial language
var language = (function () {
    var storedLanguage = window.localStorage.getItem("app.language");

    var initialLanguage;
    if (!storedLanguage) {
        var browserLanguage = navigator.language || navigator.userLanguage;
        browserLanguage = browserLanguage && browserLanguage.match(/(ru|en)/g, "");

        initialLanguage = browserLanguage instanceof Array
            ? browserLanguage[0]
            : "ru";

        window.localStorage.setItem("app.language", initialLanguage);
    } else {
        initialLanguage = /(^en$)|(^ru$)/.test(storedLanguage) ? storedLanguage : "ru";
    }

    document.documentElement.lang = initialLanguage;

    return initialLanguage;
}());

// preloader translation
(function () {
    if (language === "ru") {
        return;
    }

    var greetingHTML = document.body.querySelector(".section__subtitle > span:first-child");
    var readyHTML = document.body.querySelector(".section__subtitle > span:last-child");

    greetingHTML.innerHTML = "Welcome";
    readyHTML.innerHTML = "our team is ready to implement your ideas";
}());
