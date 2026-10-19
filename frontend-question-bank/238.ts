/**
 * 238. 除自身以外数组的乘积
 * https://leetcode.cn/problems/product-of-array-except-self/
 * @param nums 原数组
 * @description 不能用除法，所以常规做法是：
 * 前缀积：prefix[i] = nums[0] * nums[1] * ... * nums[i-1]；
 * 后缀积：suffix[i] = nums[i+1] * nums[i+2] * ... * nums[n-1]；
 * 那么：answer[i] = prefix[i] * suffix[i]。
 * O(n) 时间、O(1) 额外空间 。
 */
function productExceptSelf(nums: number[]): number[] {
    const n = nums.length
    let res: number[] = Array(n).fill(1)

    // 第一次遍历：先存前缀积
    let prefix = 1
    for (let i = 0; i < n; i++) {
        res[i] = prefix
        prefix *= nums[i]
    }
    // 第二次遍历：再乘后缀积
    let suffix = 1
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= suffix
        suffix *= nums[i]
    }
    return res
};

export {}
