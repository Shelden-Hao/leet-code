/**
 * 冒泡排序
 * @param arr 原数组
 * @description 不断比较两个相邻元素的大小，将最大值放到末尾，然后减小对比区间，直到对比完成。
 */
function bubbleSort(arr: number[]) : number[] {
    const n = arr.length
    // 外层循环遍历确定轮次 0~n-1
    for (let i = 0; i < n; i++) {
        // 内层循环找到当前轮次最大值
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr
}

console.log(bubbleSort([4,76,78,21,53,134,6]))

/**
 * 冒泡排序 - 标识点优化外层遍历次数
 * @param nums 原数组
 */
// function bubbleSort(nums: number[]): number[] {
//     const n = nums.length
//     for (let i = 0; i < n; i++) {
//         // 设置一个标识点 识别当前冒泡是否存在交换 不存在则说明该子数组已排好序 后续无需再进行冒泡排序
//         let swapped = false
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (nums[j] > nums[j + 1]) {
//                 const temp = nums[j]
//                 nums[j] = nums[j + 1]
//                 nums[j + 1] = temp
//                 swapped = true
//             }
//         }
//         if (!swapped) break
//     }
//     return nums
// }
