/**
 * 215. 数组中的第K个最大元素
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/description/
 * @param nums 原数组
 * @param k
 * @description 要求时间复杂度为O(n)，而快速排序每一次小数组排序时间复杂度刚好为 O(n)。
 * 而全部排序最大深度需要 O(logn) 次，所以全排序为 O(nlogn)。而这道题取前k个的时间复杂度为 O(kn)，去掉常量刚好为 O(n)。
 */
function findKthLargest(nums: number[], k: number): number {
    // 目标值的 index 刚好为 k - 1
    const target = k - 1
    function quickSelect(left: number, right: number) {
        const pivotIndex = partition(left, right)
        if (pivotIndex === target) {
            return nums[pivotIndex]
        } else if (pivotIndex > target) {
            return quickSelect(left, pivotIndex - 1)
        } else {
            return quickSelect(pivotIndex + 1, right)
        }
    }
    // 1. 此时我们需要根据 k 选择性进行递归，所以快排内部只需返回 pivotIndex即可
    // 2. 因为找最大值，所以这里可以直接降序排序
    function partition(left: number, right: number): number {
        const pivot = right
        let i = left
        let j = right - 1
        // 这里和下面必须要可以取等，否则最后的 i，j 所处的位置不正确
        while (i <= j) {
            // 注意：这里一定要明确大于或者小于，等于的情况在之后更小的数组中已经处理了
            while (nums[i] > nums[pivot]) {
                i++
            }
            while (nums[j] < nums[pivot]) {
                j--
            }
            if (i <= j) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                i++
                j--
            }
        }
        [nums[i], nums[pivot]] = [nums[pivot], nums[i]]
        return i
    }
    return quickSelect(0, nums.length - 1)
};
