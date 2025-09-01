/**
 * 88. 合并两个有序数组
 * https://leetcode.cn/problems/merge-sorted-array/description/
 * @param nums1 第一个数组
 * @param m 第一个数组的长度
 * @param nums2 第二个数组
 * @param n 第二个数组的长度
 * @description
 * 解决问题的关键在于第一个数组长度不变，
 * 后面的占位元素相当于给两个数组对比每一项 然后将更大项存放的位置，
 * 因为使用双指针同时从原始值位置开始从后向前遍历 不断填充占位元素，
 * 最后将nums2中剩余元素放入剩下的空位即可
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index1= m -1
    let index2 = n -1
    let index = m + n - 1
    // 从后往前遍历，谁大就先放谁
    while (index1 >= 0 && index2 >= 0) {
        if (nums1[index1] > nums2[index2]) { // 此时的大于等于或者大于不影响结果
            nums1[index] = nums1[index1]
            index1--
        } else {
            nums1[index] = nums2[index2]
            index2--
        }
        index--
    }

    // 如果nums2还剩有元素 直接全部加入nums1 因为剩余的空位一定都是nums2的
    while (index2 >= 0) {
        nums1[index] = nums2[index2]
        index--
        index2--
    }
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3)

export {}
