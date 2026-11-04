/**
 * 选择排序
 * @param arr 原数组
 * @description 每一轮都找到当前轮的最小值，放在前面，然后更新未排序数组的头部，继续找每轮的最小值，直到所有轮的最小值都被交换到头部。
 */
function selectionSort(arr: number[]): number[] {
    const n = arr.length
    // 外层循环还是需要经过的轮数
    for (let i = 0; i < n - 1; i++) {
        // 当前第一项就是最小值
        let minIndex = i
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        // 更新最小值 将其在下一轮对比中拍排除
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

console.log(selectionSort([4,76,78,21,53,134,6]))
