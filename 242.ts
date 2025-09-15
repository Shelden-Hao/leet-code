/**
 * 242. 有效的字母异位词
 * https://leetcode.cn/problems/valid-anagram/description/
 * @param s
 * @param t
 * @description 使用哈希表 map 累加第一个字符串里的所有字符，然后在第二个字符串中递减这些字符。
 * 通过最后哈希表是否为空判断他们使用到的字符是否相同。
 */
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const map = new Map<string, number>()
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (let char of t) {
        if (!map.has(char)) return false
        map.set(char, map.get(char)! - 1)
        if (map.get(char) === 0) map.delete(char)
    }
    return map.size === 0
};
