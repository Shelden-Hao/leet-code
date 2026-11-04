/**
 * 205. 同构字符串
 * https://leetcode.cn/problems/isomorphic-strings/description/
 * @param s 第一个字符串
 * @param t 第二个字符串
 * @description 同构问题（此题为字符串同构，数组同构做法同理）。
 * 使用两个 Map 存储对对方的映射，如果双方映射都满足则同构，否则不同构。
 */
function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const sMapToT: Map<string, string> = new Map()
    const tMapToS: Map<string, string> = new Map()

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i]
        const tChar = t[i]
        if ((sMapToT.has(sChar) && sMapToT.get(sChar) !== tChar)
            || (tMapToS.has(tChar) && tMapToS.get(tChar) !== sChar)) {
            return false
        }
        sMapToT.set(sChar, tChar)
        tMapToS.set(tChar, sChar)
    }
    return true
};

// [1,2,1,3] 和 [5,6,5,7] → ✅ 同构
// 因为可以建立映射：1 -> 5, 2 -> 6, 3 -> 7
// [1,2,1,3] 和 [5,6,7,7] → ❌ 不同构
// 因为 1 同时映射到了 5 和 7，冲突
