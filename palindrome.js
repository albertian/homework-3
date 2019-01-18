//imperative way (better to speed)
/**
 * Returns if input string is palindrome
 * @param {String} str - phrase to analysis
 * @returns {Boolean}
 */
function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) {
            return false;
        }
    }
    return true;
}

//declarative way (better to readability, less code lines)
/**
 * Returns if input string is palindrome
 * @param {String} str - phrase to analysis
 * @returns {Boolean}
 */
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

//usage
isPalindrome('reviver'); //true
isPalindrome('5258525'); //true
isPalindrome('XXXXX87XXXXX'); //false
