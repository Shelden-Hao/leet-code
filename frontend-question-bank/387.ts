/**
 * 387. 字符串中的第一个唯一字符
 * https://leetcode.cn/problems/first-unique-character-in-a-string/description/
 * @param s 字符串
 * @returns 查找到元素的索引
 */
function firstUniqChar(s: string): number {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], 1);
    } else {
      map.set(s[i], map.get(s[i]) + 1);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}
