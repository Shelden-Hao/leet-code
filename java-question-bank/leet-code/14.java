/**
 * [14. 最长公共前缀](https://leetcode.cn/problems/longest-common-prefix/)
 * 以第一个串为基准逐列比较，遇到不一致或某串已到头就返回前缀
 */
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs == null || strs.length == 0) return "";
        String first = strs[0];
        for (int i = 0; i < first.length(); i++) {
            char c = first.charAt(i);
            for (int j = 1; j < strs.length; j++) {
                if (i == strs[j].length() || strs[j].charAt(i) != c) {
                    return first.substring(0, i);
                }
            }
        }
        return first;
    }
}
