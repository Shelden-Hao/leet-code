/**
 * 26. 删除有序数组中的重复项
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/
 * @param nums 原数组
 * @description 快慢指针 快指针负责遍历 慢指针负责在接收不重复值覆盖原数组
 */
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0
    }
    let slow = 0, fast = 0;
    while (fast < nums.length) {
        // 如果fast和slow对应的值不同 则移动slow并赋给新值
        if (nums[fast] !== nums[slow]) {
            // 移动 slow 并赋予新的不重复值
            slow++
            nums[slow] = nums[fast]
        }
        // fast依次遍历
        fast++
    }
    // 数组长度为slow索引加一
    return slow + 1
};
