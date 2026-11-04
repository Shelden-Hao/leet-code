/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0, right = nums.length - 1;

    // O(log n) 使用二分查找
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid; // 找到目标值，返回索引

        if (nums[left] <= nums[mid]) { // 左半部分有序
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1; // target 在左半部分
            } else {
                left = mid + 1; // target 在右半部分
            }
        } else { // 右半部分有序
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1; // target 在右半部分
            } else {
                right = mid - 1; // target 在左半部分
            }
        }
    }
    return -1; // 未找到目标值
};
