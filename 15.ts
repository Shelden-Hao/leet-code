/**
 * 15. 三数之和
 * https://leetcode.cn/problems/3sum/
 * @param nums 原数组
 * @description 一层遍历第一个元素，然后使用双指针遍历剩余元素。
 * 但是注意去重，i 和 left 对应的元素可以相同
 */
function threeSum(nums: number[]): number[][] {
    const length = nums.length
    nums.sort((a, b) => a - b)
    const res: number[][] = []
    for (let i = 0; i < length - 2; i++) {
        // 必须和前一个对比，如果和后一个对比，可能是 i 和left 的关系，而他们俩是可以重复的
        if (nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--
                left++
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return res
};
