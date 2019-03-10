'use strict';

/**
 * Удаляет из переданной строки повторяющиеся символы.
 * @param {string} str - строка, из которой удаляются повторяющиеся символы.
 * @param {bool} flag - флаг. Если он не установлен, то удаляются все повторяющиеся символы. Если true - оставляется первый из повторяющихся символов, если false - последний.
 */
let letters = (str, flag) => {
    let res = "";

    if (typeof str !== "string") {
        return res;
    }
    
    if (typeof flag === "undefined") {
        for (let ch of str) {
            if (str.lastIndexOf(ch) == str.indexOf(ch)) {
                res += ch;
            }
        }
    } else if (flag === true) {
        [...str].forEach((ch, i) => {
            if (i == str.indexOf(ch)) {
                res += ch;
            }
        })
    } else if (flag === false) {
        [...str].forEach((ch, i) => {
            if (i == str.lastIndexOf(ch)) {
                res += ch;
            }
        })
    }

    return res;
}