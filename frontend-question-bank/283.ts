/**
 Do not return anything, modify nums in-place instead.
 */
/**
 * 283. 移动零
 * @param nums 原数组
 * https://leetcode.cn/problems/move-zeroes/description/
 * @description 注意在splice掉0之后，循环的次数和当前指针索引都要减一
 */
// function moveZeroes(nums: number[]): void {
//     let length = nums.length
//     for (let i = 0; i < length; i++) {
//         if (nums[i] === 0) {
//             nums.splice(i, 1)
//             nums.push(0)
//             length--
//             i--
//         }
//     }
// };

/**
 * 283. 移动零 [https://leetcode.cn/problems/move-zeroes/]
 * @param nums
 * @description 双指针 快慢指针 快指针负责便利找到非0数 慢指针负责操作0
 */
// function moveZeroes(nums: number[]): void {
//     let slow = 0
//     for (let fast = 0; fast < nums.length; fast++) {
//         if (nums[fast] !== 0) {
//             nums[slow] = nums[fast]
//             slow++
//         }
//     }
//     // 快指针已经遍历完成 剩下的都是0 同时也都是慢指针未遍历的
//     for (let i = slow; i < nums.length; i++) {
//         nums[i] = 0
//     }
// };

/**
 * 283. 移动零 [https://leetcode.cn/problems/move-zeroes/]
 * @param nums
 * @description 还是双指针 但是只遍历一遍 快指针遍历的同时把非0数与慢指针(数为0)交换
 */
function moveZeroes(nums: number[]): void {
    let slow = 0
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
            slow++
        }
    }
};
