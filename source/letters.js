'use strict';

/**
 * Возращает переданную строку без повторяющихся символов.
 * @param {string} str - строка, из которой удаляются повторяющиеся символы.
 * @param {bool} flag - флаг. Если он не установлен, то удаляются все
 * повторяющиеся символы. Если true - оставляется первый из повторяющихся
 *  символов, если false - последний.
 */
let letters = (str, flag) => {
    let res = "";

    if (typeof str !== "string") {
        return res;
    }

    if (typeof flag !== "boolean" && typeof flag !== "undefined") {
        return res;
    }
    
    [...str].forEach((ch, i) => {
        if (typeof flag === "undefined") {
            if (str.lastIndexOf(ch) === str.indexOf(ch)) {
                res += ch;
            }
        } else if (flag === true) {
            if (i === str.indexOf(ch)) {
                res += ch;
            }
        } else if (flag === false) {
            if (i === str.lastIndexOf(ch)) {
                res += ch;
            }
        }
    })
    return res;
}