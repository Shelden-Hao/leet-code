/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let resArr = s.split('')
    for (let i = 0; i < resArr.length; i += 2 * k) {
        let l = i
        let r = (i + k) > resArr.length ? resArr.length : i + k
        while (l < r - 1) {
            [resArr[l], resArr[r - 1]] = [resArr[r - 1], resArr[l]]
            l++
            r--
        }
    }
    return  resArr.join('')
};
let s = "abcd"
let res = reverseStr(s, 2)
console.log(res)