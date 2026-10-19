/**
 * 1539. 第 k 个缺失的正整数 - 常规方法
 * https://leetcode.cn/problems/kth-missing-positive-number/description/
 * @param arr
 * @param k
 * @description 明确缺失的数、arr 索引、当前计数的关系
 * 时间复杂度 O(n)
 */
function findKthPositive(arr: number[], k: number): number {
    // 缺失数的计数
    let missing = 0
    // 当前计数数字(题干要求从1开始)
    let current = 1
    // arr 的索引
    let i = 0
    while (true) {
        if (i < arr.length && arr[i] === current) {
            // 没有缺失数：i 不越界并且当前计数刚好在数组当前项
            i++;
        } else {
            // 存在缺失数：缺失计数加一
            missing++
            if (missing === k) return current
        }
        // 每次循环判断都会让当前计数加一
        current++
    }
};

/**
 * 1539. 第 k 个缺失的正整数 - 二分查找
 * https://leetcode.cn/problems/kth-missing-positive-number/description/
 * @param arr
 * @param k
 * @description 对于数组下标 i，在 arr[i] 之前缺失的数字个数是：arr[i] - (i + 1)。
 * 因为如果没有缺失，第 i 个位置应该是 i+1。
 * 用二分找到第一个缺失数量 >= k 的位置。那么，在 arr[left-1] 之前，缺失数量一定 < k。
 * 所以第 k 个缺失数一定在 arr[left-1] 和 arr[left] 之间，或者在数组尾部之外。
 * 时间复杂度 O(logn)
 */
// function findKthPositive(arr: number[], k: number): number {
//     let left = 0, right = arr.length - 1
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2)
//         const missing = arr[mid] - (mid + 1)
//         if (missing < k) {
//             left = mid + 1
//         } else {
//             right = mid - 1
//         }
//     }
//     return left + k
// }

// ❗为什么 left + k？
// 假设数组长度是 n，我们有两种情况：
// 第 k 个缺失数在数组范围内
// 例如 arr = [2,3,4,7,11], k = 5
// 二分后 left = 4（arr[3] = 7 之前缺失 3 个，arr[4] = 11 之前缺失 6 个）。
// 说明第 5 个缺失数就在 [7, 11) 之间。
// 答案 = left + k = 4 + 5 = 9 ✅
// 第 k 个缺失数在数组范围外
// 例如 arr = [1,2,3,4], k = 2
// 整个数组之前缺失的总数只有 arr[n-1] - n = 4 - 4 = 0。
// 二分后 left = 4（即数组长度）。
// 说明缺失的数都在数组之后。
// 答案 = left + k = 4 + 2 = 6 ✅
// 所以，left + k 就是第 k 个缺失数的位置。
