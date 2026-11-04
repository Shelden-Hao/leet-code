/**
 * [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)
 * 双指针指向不含重复字符的连续字串的头和尾，用集合存储子串中的元素，有重复时，左指针持续右移，无重复后统计长度
 */
class Solution {
    public int lengthOfLongestSubstring(String s) {
        int i = 0;
        int j = 0;
        int n = s.length();
        if (n == 0) return 0;
        Set<Character> set = new HashSet<>();
        int len = 0;
        while (j < n) {
            while (set.contains(s.charAt(j))) {
                set.remove(s.charAt(i));
                ++i;
            }
            len = Math.max(len, j - i);
            set.add(s.charAt(j));
            ++j;
        }
        return len + 1;
    }
}