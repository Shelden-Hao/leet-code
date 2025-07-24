/**
 * 1556. 千位分隔数
 * https://leetcode.cn/problems/thousand-separator/description/
 * @param n 原数字
 */
function thousandSeparator(n: number): string {
    const str = n.toString()
    let res = ''
    let count = 0
    for (let i = str.length - 1; i >= 0; i--) {
        res = str[i] + res
        count++
        if (count % 3 === 0 && i !== 0) {
            res = '.' + res
        }
    }
    return res
};
