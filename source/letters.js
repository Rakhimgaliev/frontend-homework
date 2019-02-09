'use strict';

const letters = (str, flag) => {
    var res = "";

    if (flag === undefined) {
        for (var i = 0; i < str.length; i++) {
            if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
                res += str[i];
            }
        }
    } else if (flag === true) {
        for (var i = 0; i < str.length; i++) {
            if (i == str.indexOf(str[i])) {
                res += str[i];
            }
        }
    } else if (flag === false) {
        for (var i = 0; i < str.length; i++) {
            if (i == str.lastIndexOf(str[i])) {
                res += str[i];
            }
        }
    }

    return res;
}