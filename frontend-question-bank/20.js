/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0 || s.length%2 !== 0) return false
    let arr = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            if (s[i] === '(') {
                arr.push(')');
            }
            if (s[i] === '[') {
                arr.push(']')
            }
            if (s[i] === '{') {
                arr.push('}')
            }
        }
        if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            if (s[i] === arr[arr.length - 1]) {
                arr.pop()
            } else {
                return false
            }
        }
    }
    if (arr.length !== 0) {
        return  false
    }
    return true
};
// (temp1 === ']' && temp2 === '[') || (temp1 === '}' && temp2 === '{') || (temp1 === ')' && temp2 === '(')