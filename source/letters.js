'use strict';

let letters = (str, flag) => {
    let res = "";

    if (typeof str === "undefined") {
        return res;
    }
    
    if (typeof flag === "undefined") {
        for (let i = 0; i < str.length; i++) {
            if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
                res += str[i];
            }
        }
    } else if (flag === true) {
        for (let i = 0; i < str.length; i++) {
            if (i == str.indexOf(str[i])) {
                res += str[i];
            }
        }
    } else if (flag === false) {
        for (let i = 0; i < str.length; i++) {
            if (i == str.lastIndexOf(str[i])) {
                res += str[i];
            }
        }
    }

    return res;
}