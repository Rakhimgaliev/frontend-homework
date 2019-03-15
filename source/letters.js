'use strict';

/**
 * Возращает переданную строку без повторяющихся символов.
 * @param {string} str - строка, из которой удаляются повторяющиеся символы.
 * @param {bool} flag - флаг. Если он не установлен, то удаляются все
 * повторяющиеся символы. Если true - оставляется первый из повторяющихся
 *  символов, если false - последний.
 */
let letters = (str, flag) => {

    if (typeof str !== "string") {
        return "";
    }

    if (typeof flag !== "boolean" && typeof flag !== "undefined") {
        return "";
    }
    
    return [...str].reduce((accumulator, ch, i  ) => {
        if (typeof flag === "undefined" && str.lastIndexOf(ch) === str.indexOf(ch)
            || flag === true && i === str.indexOf(ch)
            || flag === false && i === str.lastIndexOf(ch)) {
            return accumulator + ch;
        }
        return accumulator;
    }, "");
}