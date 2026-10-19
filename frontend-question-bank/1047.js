/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates_1047 = function(s) {
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (arr[arr.length - 1] === s[i]) {
            arr.pop()
        } else {
            arr.push(s[i])
        }
    }
    return arr.join('')
};