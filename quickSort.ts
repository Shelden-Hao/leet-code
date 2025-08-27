/**
 * 快速排序
 * @param arr 原数组
 * @description 使用双指针(left/right)递归拆分原数组，选取某一个元素(我这里选取一个小数组中的最右边元素)为基准元素 pivot。
 * 然后根据该元素为中间值将数组不断拆分为两个数组，直到递归的左右指针重合，不可再拆分，数组同时也排序完成。
 */
function quickSort(arr: number[]): number[] {

    partition(0, arr.length - 1)

    function partition(left: number, right: number) {
        if (left >= right) return

        // 找到基准元素
        const pivot = arr[right]

        // 双指针交换 左右都是比基准元素小的 右边都是比基准元素大的
        let i = left
        let j = right - 1

        while (i <= j) {
            // 相等的情况会自己处理，无需代码体现
            while (arr[i] < pivot) {
                i++;
            }
            while (arr[j] > pivot) {
                j--
            }

            if (i <= j) {
                // 此时刚好找到一个左边比基准大的 一个右边比基准小的
                [arr[i], arr[j]] = [arr[j], arr[i]]
                // 交换完成还需要给左右指针再移动一次
                i++;
                j--
            }
        }

        // 此时 i 的左边都是比基准要小的，j 的右边都是比基准要大的 i和j的关系：j<i
        // 所以需要给pivot放在中间位置，所以是和一个比他大的元素做交换
        [arr[i], arr[right]] = [arr[right], arr[i]]

        // 然后继续给左右两边进行partition
        partition(left, j)
        partition(i + 1, right)
    }

    return arr
}
