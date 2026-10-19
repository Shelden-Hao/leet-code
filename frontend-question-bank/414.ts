/**
 * 414. 第三大的数 方法一：Set 去重和排序
 * https://leetcode.cn/problems/third-maximum-number/description/
 * @param nums 数组
 */
// function thirdMax(nums: number[]): number {
//     if (nums.length === 0) return -1
//
//     const arr = Array.from(new Set(nums))
//     arr.sort((a, b) => b - a)
//
//     if (arr.length < 3) {
//         return arr[0]
//     } else {
//         return arr[2]
//     }
// };

/**
 * 414. 第三大的数 方法二：一次遍历，但是要时刻更新最值，时间复杂度优化为 O(n)
 * https://leetcode.cn/problems/third-maximum-number/description/
 * @param nums 数组
 */
function thirdMax(nums: number[]): number {
    if (nums.length === 0) return -1

    let first: number | null = null;
    let second: number | null = null;
    let third: number | null = null;

    for (let num of nums) {
        if (num === first || num === second || num === third) continue

        if (first === null || num > first) {
            third = second
            second = first
            first = num
        } else if (second === null || num > second) {
            third = second
            second = num
        } else if (third === null || num > third) {
            third = num
        }
    }

    return third !== null ? third : first!
};
