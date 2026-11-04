/**
 * 410. 分割数组的最大值
 * https://leetcode.cn/problems/split-array-largest-sum/description/
 * @description 贪心+二分。
 * 1. 要让子数组各自和的最大值 最小。那么可以锁定这个子数组和的范围一定在 [单个元素最大值, 数组所有元素之和] 之间
 * 2. 然后通过二分查找不断尝试子数组和（第一次假设是 mid）
 * 3. 用这个假设值，来分析是否可以分为 k 组 (canSplit)
 * @param nums 原数组
 * @param k 分为 k 组
 */
function splitArray(nums: number[], k: number): number {
    function canSplit(mid: number) {
        let sum = 0
        // 至少一组
        let count = 1
        for (let num of nums) {
            // 未到假设的和，继续累加
            if (sum + num <= mid) {
                sum += num
            } else {
                // 超过假设的和，新开一组
                count++
                sum = num
                // 超过分组要求直接 false，否则为 true
                if (count > k) return false
            }
        }
        return true
    }

    let left = Math.max(...nums)
    let right = nums.reduce((a, b) => a + b, 0)
    while (left < right) {
        // 假设 mid 就是最终的结果（各个数组和的最大值的最小值）
        const mid = Math.floor((left + right) / 2)
        if (canSplit(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};