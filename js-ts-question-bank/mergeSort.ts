/**
 * 归并排序
 * @param arr 新数组
 * @description 使用分治的思想不断将数组划分为两个小数组，直到数组中只剩一项。
 * 然后使用双指针遍历两个小数组，按序合并为一个新数组，直到合并为一个排序后的新数组。
 */
function mergeSort(arr: number[]): number[] {
    // 递归终止条件
    if (arr.length === 1) return arr

    // 分解：对数组拆分成两个小数组，最终拆分为两个含有单个元素的数组
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)

    const newLeftArr = mergeSort(leftArr)
    const newRightArr = mergeSort(rightArr)

    // 双指针遍历两个小数组，进行合并
    const newArr: number[] =[]
    let i = 0, j = 0
    while (i < newLeftArr.length && j < newRightArr.length) {
        if (newLeftArr[i] <= newRightArr[j]) {
            newArr.push(newLeftArr[i]);
            i++
        } else {
            newArr.push(newRightArr[j])
            j++
        }
    }

    // 如果还有剩余，则全部推入newArr
    if (i < newLeftArr.length) {
        newArr.push(...newLeftArr.slice(i))
    }
    if (j < newRightArr.length) {
        newArr.push(...newRightArr.slice(j))
    }

    return newArr;
}
