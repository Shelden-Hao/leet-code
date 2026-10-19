/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
const findContentChildren = function(g, s) {
    g.sort((a, b) =>  a - b)
    s.sort((a, b) =>  a - b)
    let count = 0
    let gFlag = 0
    let sFlag = 0
    while (sFlag < s.length) {
        if (s[sFlag] >= g[gFlag]) {
            sFlag++
            gFlag++
            count++
        } else {
            sFlag++
        }
    }
    return count;
};
let g =[10,9,8,7], s = [5,6,7,8]
console.log(findContentChildren(g, s));
