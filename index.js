'use strict';

/**
 *
 * @param window
 * @returns "0"|"1"|"unspecified"
 */
exports.dnt = function(window) {
    if (typeof window.navigator.doNotTrack !== "undefined") {
        var result = window.navigator.doNotTrack;
        // https://bugzilla.mozilla.org/show_bug.cgi?id=887703
        if (result === "yes") result = "1";
        if (result === "no") result = "0";
        return result;
    }
    if (typeof window.navigator.msDoNotTrack !== "undefined") {
        // IE9, IE10
        return window.navigator.msDoNotTrack;
    }
    if (typeof window.doNotTrack !== "undefined") {
        // Safari 7.1.3+, IE11
        return window.doNotTrack;
    }
    return "unspecified";
};
