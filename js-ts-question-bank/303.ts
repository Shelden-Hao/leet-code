/**
 * 303. 区域和检索 - 数组不可变
 * https://leetcode.cn/problems/range-sum-query-immutable/description/
 * @description 直接遍历时间复杂度为 O(n) ，使用前缀和时间复杂度为 O(1)
 */
class NumArray {
    private nums: number[];
    constructor(nums: number[]) {
        this.nums = nums
    }

    sumRange(left: number, right: number): number {
        // Array.from 默认从类数组对象或可迭代对象创建新数组的元素类型为unknown，需要断言指定类型
        // 所以使用 new Array 可以更好地指定类型
        const preSum: number[] = new Array(this.nums.length + 1).fill(0)
        // 求出前缀和数组 preSum 的第一项为0，之后的每一项(i>1)都是nums的第i-1项的前缀和
        for (let i = 1; i < preSum.length; i++) {
            preSum[i] = preSum[i - 1] + this.nums[i - 1]
        }
        // 除了第一项，后面刚好和nums对应
        return preSum[right + 1] - preSum[left]
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
