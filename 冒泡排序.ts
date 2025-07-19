/**
 * 冒泡排序
 * @param nums 原数组
 */
// function bubbleSort(nums: number[]): number[] {
//     const n = nums.length
//     // 外层循环所有元素
//     for (let i = 0; i < n; i++) {
//         // 内层循环到 n-1-i 处
//         // 因为第一次默认到 n-1 处 之后最后每次都多一个已经排好序的元素
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (nums[j] > nums[j + 1]) {
//                 const temp = nums[j];
//                 nums[j] = nums[j + 1]
//                 nums[j + 1] = temp
//             }
//         }
//     }
//     return nums
// }

/**
 * 冒泡排序 - 标识点优化外层遍历次数
 * @param nums 原数组
 */
function bubbleSort(nums: number[]): number[] {
    const n = nums.length
    for (let i = 0; i < n; i++) {
        // 设置一个标识点 识别当前冒泡是否存在交换 不存在则说明该子数组已排好序 后续无需再进行冒泡排序
        let swapped = false
        for (let j = 0; j < n - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                const temp = nums[j]
                nums[j] = nums[j + 1]
                nums[j + 1] = temp
                swapped = true
            }
        }
        if (!swapped) break
    }
    return nums
}