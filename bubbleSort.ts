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
