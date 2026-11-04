/**
 * 14. 最长公共前缀
 * https://leetcode.cn/problems/longest-common-prefix/description/
 * @param strs 原字符串
 * @description 把第一个字符串当做之后字符串的前缀，不断判断这个假设是否成立(其他的字符串的indexOf是否为0)。
 * 不成立则不断删掉最后一个字符，直到都满足或者前缀为空停止。
 */
function longestCommonPrefix(strs: string[]): string {
    // 数组为空 直接返回空串
    if (strs.length === 0) return "";
    // 把第一个元素作为prefix，后续逐渐切割
    // 判断前缀是否为字符串的子集（indexOf）进行切割
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        const str = strs[i]
        // 只有前缀的情况下才是 0，否则都不是前缀
        while (str.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1)
        }
        if (prefix.length === 0) return prefix
    }
    return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""

export {}
