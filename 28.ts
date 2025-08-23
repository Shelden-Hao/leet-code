/**
 * 28. 找出字符串中第一个匹配项的下标
 * https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 * @param haystack 主串
 * @param needle 子串
 * @description 经典的 KMP 算法。
 * 注意：1. next 数组的求法，求最长公共前后缀。 2， 双指针移动，i 指针遍历，j 指针做条件判断。
 */
function strStr(haystack: string, needle: string): number {
    const n = haystack.length
    const m = needle.length
    // 如果子串的长度为 0，那么也认为和第一项匹配，所以返回 0
    if (m === 0) return 0

    // 构造 lps 最长前缀后缀表 next
    const next = buildNext(needle)

    // 双指针遍历并判断
    let i = 0, j = 0
    while (i < n) {
        if (haystack[i] === needle[j]) {
            // 子串和主串在该位置相等
            i++
            j++
            if (j === m) {
                return i - j
            }
        } else {
            // 不等于的情况下
            if (j > 0) {
                // 子串遍历 j 还不在初识位置(0)，回退 j
                j = next[j - 1]
            } else {
                // j 都在初识位置还不等，i 只能继续向后遍历，去找和当前 j 相等的 i
                i++
            }
        }
    }

    return -1
};

function buildNext(pattern: string): number[] {
    const m = pattern.length
    const next = new Array(m).fill(0)
    // len 表示当前最长相等前缀后缀表的长度，i 这里需要从 1 开始与前面比较才有意义
    let len = 0, i = 1
    // i 遍历子串到最后
    while (i < m) {
        if (pattern[i] === pattern[len]) {
            // 成功匹配当前项：延长 lps 并记录到 next
            len++
            next[i] = len
            i++
        } else  {
            // 如果当前项匹配失败
            if (len > 0) {
                // len 还大于 0，不移动 i，因为当前项还要和再之前的 len 位置比较，直到 len 为 0 位置还不相等(匹配)
                len = next[len - 1];
            } else {
                // len 已经等于 0
                // 该项 next 置为 0，继续向前
                next[i] = 0
                i++
            }
        }
    }
    return next
}

// function strStr(haystack: string, needle: string): number {
//     // js 中提供了求字符串中第一个匹配项的下标的方法 indexOf，但是笔试肯定不能直接使该方法啦~
//     return haystack.indexOf(needle)
// };

export {}
