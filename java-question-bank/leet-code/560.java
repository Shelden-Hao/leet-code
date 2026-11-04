/**
 * [560. 和为 K 的子数组](https://leetcode.cn/problems/subarray-sum-equals-k/)
 * 遍历数组时计算前缀和，将前缀和出现的次数存放在哈希表中。对于遍历到下标`i`时，只需要知道在之前的前缀和值为`prefixSum[i] - target`出现的次数即可，然后把次数相加。
 */
class Solution {
    public int subarraySum(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        int sum = 0;
        int count = 0;
        map.put(0, 1);
        for (int num : nums) {
            sum += num;
            count += map.getOrDefault(sum - k, 0);
            map.put(sum, map.getOrDefault(sum, 0) + 1);
        }
        return count;
    }
}