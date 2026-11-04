/**
 * [438. 找到字符串中所有字母异位词](https://leetcode.cn/problems/find-all-anagrams-in-a-string/)
 * 维护一个固定长度的窗口，向后遍历，每前进一步就检查当前窗口是否满足条件，满足条件就记录下来
 */
class Solution {
    public List<Integer> findAnagrams(String s, String p) {
        int[] scnt = new int[26];
        int[] pcnt = new int[26];
        int n = s.length();
        int m = p.length();
        if (n < m) return new ArrayList<>();
        for (int i = 0; i < m; i++) {
            ++pcnt[p.charAt(i) - 'a'];
            ++scnt[s.charAt(i) - 'a'];
        }
        ArrayList<Integer> list = new ArrayList<>();
        if (isAnagram(scnt, pcnt)) list.add(0);
        for (int i = 0, j = m; j < n; i++, j++) {
            --scnt[s.charAt(i) - 'a'];
            ++scnt[s.charAt(j) - 'a'];
            if (isAnagram(scnt, pcnt)) list.add(i+1);
        }
        return list;
    }

    public boolean isAnagram(int[] s, int[] t) {
        for (int i = 0; i < 26; i++) {
            if (s[i] != t[i]) return false;
        }
        return true;
    }
}