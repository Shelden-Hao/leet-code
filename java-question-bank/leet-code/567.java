/**
 * [567. 字符串的排列](https://leetcode.cn/problems/permutation-in-string/)
 * 定长滑动窗口 + 26 字母计数，窗口字符频次与 s1 完全一致即存在排列
 */
class Solution {
    public boolean checkInclusion(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        if (m > n) return false;
        int[] need = new int[26], win = new int[26];
        for (int i = 0; i < m; i++) {
            need[s1.charAt(i) - 'a']++;
            win[s2.charAt(i) - 'a']++;
        }
        if (Arrays.equals(need, win)) return true;
        for (int i = m; i < n; i++) {
            win[s2.charAt(i) - 'a']++;
            win[s2.charAt(i - m) - 'a']--;
            if (Arrays.equals(need, win)) return true;
        }
        return false;
    }
}
