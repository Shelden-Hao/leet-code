/**
 * 插入排序
 * @param arr 原数组
 * @description 外层遍历获取到当前值，内层遍历为当前值之前的需要对比的数组。
 * 将外层当前值插入到对比数组合适的位置，直到所有值都选取过。
 */
function insertionSort(arr: number[]): number[] {
    const n = arr.length
    for (let i = 1; i < n; i++) {
        // 获取当前外层遍历值
        const newNum = arr[i]
        let j = i - 1
        while (arr[j] > newNum && j >= 0) {
            // 将比当前值 arr[i] 大的都往后移动一位
            arr[j + 1] = arr[j]
            j--
        }
        // 移动至此刚好 arr[j] 是第一个比 arr[i] 小的，所以将 arr[i] 插入到 arr[j] 的下一位
        arr[j + 1] = newNum
    }
    return arr
}
