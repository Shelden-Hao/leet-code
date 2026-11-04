/**
 * [763. 划分字母区间](https://leetcode.cn/problems/partition-labels/)
 */
class Solution {
    public List<Integer> partitionLabels(String s) {
        int n = s.length();
        int[] last = new int[26];
        for (int i = 0; i < n; i++) {
            last[s.charAt(i) - 'a'] = i;
        }
        List<Integer> ans = new ArrayList<>();
        int start = -1;
        int end = 0;
        for (int i = 0; i < n; i++) {
            // 不断把当前片段右边界推到字符最后出现的位置，i 追上 end 就切一刀
            end = Math.max(end, last[s.charAt(i) - 'a']);
            if (i == end) {
                ans.add(end - start);
                start = end;
            }
        }
        return ans;
    }
}
