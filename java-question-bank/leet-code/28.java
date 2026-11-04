/**
 * [28. 找出字符串中第一个匹配项的下标](https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string/)
 * KMP：先构造模式串的 next 数组，失配时按 next 回退而不回退主串指针
 */
class Solution {
    public int strStr(String haystack, String needle) {
        if (needle.isEmpty()) return 0;
        int[] next = new int[needle.length()];
        for (int i = 1, j = 0; i < needle.length(); i++) {
            while (j > 0 && needle.charAt(i) != needle.charAt(j)) j = next[j - 1];
            if (needle.charAt(i) == needle.charAt(j)) j++;
            next[i] = j;
        }
        for (int i = 0, j = 0; i < haystack.length(); i++) {
            while (j > 0 && haystack.charAt(i) != needle.charAt(j)) j = next[j - 1];
            if (haystack.charAt(i) == needle.charAt(j)) j++;
            if (j == needle.length()) return i - j + 1;
        }
        return -1;
    }
}
