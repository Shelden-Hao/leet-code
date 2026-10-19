/**
 * [1. 两数之和](https://leetcode.cn/problems/two-sum/)
 * 使用哈希表存储数和对应下标，遍历的同时进行寻找
 */
class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < n; i++) {
            if (map.containsKey(target - nums[i])) {
                return new int[]{i,map.get(target - nums[i])};
            }
            map.put(nums[i], i);
        }
        return null;
    }
}