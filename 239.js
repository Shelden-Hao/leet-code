/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 超时 时间复杂度为O(nk)
// var maxSlidingWindow = function (nums, k) {
//     let i = 0
//     let j = i + k
//     let maxArr = []
//     for (; j <= nums.length; ++i, ++j) {
//         let tempNums = nums.slice(i, j)
//         let max = Math.max(...tempNums)
//         maxArr.push(max)
//     }
//     return maxArr
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 时间复杂度为 O(n)
var maxSlidingWindow = function (nums, k) {
    let result = [];
    let deque = [];
    for (let i = 0; i < nums.length; i++) {
        // 从队尾移除不在滑动窗口范围内的元素
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }
        // 从队尾移除小于当前元素的元素，保持队列递减
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        // 将当前元素加入队列
        deque.push(i);
        // 当滑动窗口完全覆盖数组时，将队首元素加入结果数组
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
};