// tslint:disable
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
    }

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
})();