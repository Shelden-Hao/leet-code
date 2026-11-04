/**
 * [300. 最长递增子序列](https://leetcode.cn/problems/longest-increasing-subsequence/)
 */
class Solution {
    public int lengthOfLIS(int[] nums) {
        // 贪心 + 二分：tail[i] 记录长度为 i+1 的递增子序列的最小结尾，长度即答案
        int len = 0;
        int[] tail = new int[nums.length];
        for (int num : nums) {
            int i = 0;
            int j = len - 1;
            while (i <= j) {
                int mid = (i + j) >>> 1;
                if (tail[mid] >= num) j = mid - 1;
                else i = mid + 1;
            }
            tail[i] = num;
            if (i == len) len++;
        }
        return len;
    }
}
