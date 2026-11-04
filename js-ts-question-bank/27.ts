/**
 * 27. 移除元素
 * https://leetcode.cn/problems/remove-element/description/
 * @param nums 原数组
 * @param val 给定的需要排除的相同值
 * @description 快慢指针 快指针负责遍历 慢指针负责接收不与val相同的值。
 * 注意：第一项slow需要和val对比，所以slow后++，最终的slow索引刚好为结果的后一项，所以索引值刚好为结果长度值
 */
function removeElement(nums: number[], val: number): number {
    if (nums.length === 0) {
        return 0
    }
    let slow = 0, fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};
