(function(window, document) {

    'use strict';

    var $ = window.jQuery;
    var yp = window.yepnope;

    $(document).on("impress:stepenter", function(e) {
        var name = e.target.id;
        var now = window.now;

        // inform server if available
        if (now) {
            // now.changeSlide(name);
        }

        if (name === 'index') {
            return;
        }

        $('.step:not(.present)').hide();
    });

    $(document).on("impress:stepleave", function(e) {
        $('.step:not(.present)').show();
    });

    yp({
        load: "//starbucks.local:8080/nowjs/now.js",
        callback: function(url, result, key) {
            var now = window.now;
            var keynote = window.impress();

            if (! now) {
                return;
            }

            now.keynote = keynote;

            if (now.slide) {
                keynote.goto(now.slide);
            }
        }
    });

})(this, this.document);
