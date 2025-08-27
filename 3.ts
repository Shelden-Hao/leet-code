/**
 * 3. 无重复字符的最长子串
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 * @param s 原始字符串
 * @description
 * 双指针 -> 字符串、数组 都可用使用类似的解法
 * - right 从头扫描到尾部
 * - left 默认指向0，发现right出现了重复的字符时， left直接指向左边重复的下一个元素
 * - 保存已经扫描的字符 - 哈希表（Map: { key: value } key 为字符，value 为索引）
 * - 注意点：必须判断 map.get(s[right]) >= left 保证不会把滑动窗口之外的，但是是 Map 里的字符考虑在内
 */
function lengthOfLongestSubstring(s: string): number {
    let left = 0
    const map = new Map()
    let length = 0
    for (let right = 0; right < s.length; right++) {
        // 当当前字符在哈希表中且位于滑动窗口中，需要更新慢指针
        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1
        }
        // 不论当前字符是否在哈希表中，都更新为最新值
        map.set(s[right], right);
        length = Math.max(length, right - left + 1)
    }
    return length
};
