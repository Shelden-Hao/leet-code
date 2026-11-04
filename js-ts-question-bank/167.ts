/**
 * 167. 两数之和 II - 输入有序数组
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/
 * @param numbers 原数组
 * @param target 目标和
 * @description 左右指针
 * 注意：index的取值是[1, length]
 */
function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length - 1;
    while (left < right) {
        if (numbers[left] + numbers[right] < target) {
            left++
        } else if (numbers[left] + numbers[right] > target) {
            right--
        } else {
            return [left + 1, right + 1]
        }
    }
    return [-1, -1]
};
