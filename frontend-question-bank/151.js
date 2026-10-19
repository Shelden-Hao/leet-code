/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let str = s.trim()
    let arr = str.split(/\s+/) // 使用正则表达式匹配一个或多个空格
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i].trim()) // 去除首尾空格后放入newArr
    }
    return newArr.join(' ')
};
let s = "a good   example"
console.log(reverseWords(s))
