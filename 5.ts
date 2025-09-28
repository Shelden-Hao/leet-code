/**
 * 最长回文子串
 * @param s 原始字符串
 */
// function longestPalindrome(s: string): string {
//     const length = s.length
//     if (length <= 1) return s;
//     // 根据最终（最长的）子串设定 start end 切割索引
//     let start = 0
//     let end = 0
//     // 遍历每一个字符
//     for (let i = 0; i < length; i++) {
//         // 奇数扩展
//         const lengthOneExpand = centerExpand(s, i, i)
//         // 偶数扩展
//         const lengthMoreExpand = centerExpand(s, i, i + 1)
//         const len = Math.max(lengthOneExpand, lengthMoreExpand)
//         // 如果比之前的子串长
//         if (len > end - start) {
//             // 重新赋值切割索引 使左右指针同时满足奇偶长度子串
//             // 举例：奇数：abcbd 偶数：abba
//             const left = i - Math.floor((len - 1) / 2)
//             const right = i + Math.floor(len / 2)
//             start = left
//             end = right
//         }
//     }
//     return s.substring(start, end + 1)
// };
//
// /**
//  * 从中心扩展函数
//  * @param s 原始字符串
//  * @param left 左指针的索引
//  * @param right 右指针的索引
//  */
// function centerExpand(s: string, left: number, right: number): number {
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//         left--
//         right++
//     }
//     // 最后一次循环多了一个 left-- 和 right++ 所以子串长度再减去 2
//     return right - left + 1 - 2;
// }

/**
 * 5. 最长回文子串
 * https://leetcode.cn/problems/longest-palindromic-substring/description/
 * @param s 原始字符串
 */
function longestPalindrome(s: string): string {
    if (s.length === 0 || s.length === 1) return s;
    let res = ''
    let max = ''

    /**
     * 从左右指针扩展找到最长回文子串的函数
     * @param s 原字符串
     * @param l 左指针起始索引
     * @param r 右指针起始索引
     * @return 最长回文子串
     */
    function centerExpand(s: string, l: number, r: number): string {
        let left = l
        let right = r
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--
            right++
        }
        return s.slice(left + 1, right)
    }

    for (let i = 0; i < s.length; i++) {
        // 奇数长度字符串
        const oddStr = centerExpand(s, i, i)
        // 偶数长度字符串
        const evenStr = centerExpand(s, i, i + 1)
        max = oddStr.length > evenStr.length ? oddStr : evenStr
        res = max.length > res.length ? max : res
    }
    return res
}
