/**
 * [76. 最小覆盖子串](https://leetcode.cn/problems/minimum-window-substring/)
 */
class Solution {
    public String minWindow(String s, String t) {
        int[] scnt = new int[58];
        int[] tcnt = new int[58];
        int n = s.length();
        int m = t.length();
        if (n < m) return "";
        for (int i = 0; i < m; i++) {
            tcnt[t.charAt(i) - 'A']++;
            scnt[s.charAt(i) - 'A']++;
        }
        int i = 0;
        int j = m - 1;
        scnt[s.charAt(m - 1) - 'A']--;
        int len = Integer.MAX_VALUE;
        int left = 0;
        int right = 0;
        while (j < n) {
            scnt[s.charAt(j) - 'A']++;
            while (isCover(scnt, tcnt)) {
                if (len > j - i) {
                    len = j - i;
                    left = i;
                    right = j;
                }
                scnt[s.charAt(i) - 'A']--;
                i++;
            }
            j++;
        }
        if (len != Integer.MAX_VALUE)
            return s.substring(left, right + 1);
        else
            return "";
    }
    public boolean isCover(int[] s, int[] t) {
        for (int i = 0; i < t.length; i++) {
            if (s[i] < t[i]) return false;
        }
        return true;
    }
}