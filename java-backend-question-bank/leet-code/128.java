/**
 * [128. 最长连续序列](https://leetcode.cn/problems/longest-consecutive-sequence/)
 * 使用set存储所有的数，然后遍历所有的数，每一次循环，检查是否存在比当前数更小的值，如果存在，直接跳过，如果不存在，则开始统计。
 */
class Solution {
    public int longestConsecutive(int[] nums) {
        if (nums.length == 0) return 0;
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }
        int longest = 1;
        for (Integer num : set) {
            if (set.contains(num - 1)) continue;
            int curLongest = 1;
            while (set.contains(++num)) {
                curLongest++;
                longest = Math.max(longest, curLongest);
            }
        }
        return longest;
    }
}