/**
 * Returns if input string is palindrome
 * @param {String} str - phrase to analysis
 * @returns {Boolean}
 */
function isPalindrome(str) {
    const len = str.length;
    const middle = Math.round(len / 2);
    for (let i = 0; i < len; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false;
        }
    }
    return true;
}
//usage
isPalindrome('reviver'); //true
isPalindrome('5258525'); //true
isPalindrome('XXXXX87XXXXX'); //false
