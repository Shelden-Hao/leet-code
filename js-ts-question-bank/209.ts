/**
 * 209. 长度最小的子数组 - 滑动窗口
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 * @param target 需要求的数组和
 * @param nums 原数组
 * @description 方法一：滑动窗口。
 */
function minSubArrayLen(target: number, nums: number[]): number {
    let slow = 0
    let sum = 0
    let minLen = Infinity
    for (let fast = 0; fast < nums.length; fast++) {
        sum += nums[fast]
        while (sum >= target) {
            minLen = Math.min(minLen, fast - slow + 1)
            sum -= nums[slow]
            slow++
        }
    }
    return minLen === Infinity ? 0 : minLen
};

/**
 * 209. 长度最小的子数组 - 二分+前缀和
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 * @param target 需要求的数组和
 * @param nums 原数组
 * @description 方法二：二分+前缀和。
 * 两个指针位置前缀和的差大于等于target即满足题意，使用二分查找使其时间复杂度为O(nlogn) 。
 */
