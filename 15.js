/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let res = []
    let sortedNums = nums.sort((a, b) => a - b)
    for (let i = 0; i < sortedNums.length; i++) {
        let l = i + 1, r = sortedNums.length - 1
        // 最小值大于 0 直接 return
        if (sortedNums[i] > 0) return res
        // 去重 i 项
        if (sortedNums[i] === sortedNums[i - 1]) continue
        while (l < r) {
            // 需要先判断大于和小于 因为不满足条件直接进行指针移动 而相等的情况下还需要 进行去重
            if (sortedNums[i] + sortedNums[l] + sortedNums[r] > 0) {
                r--
            } else if (sortedNums[i] + sortedNums[l] + sortedNums[r] < 0) {
                l++;
            } else {
                res.push([sortedNums[i], sortedNums[l], sortedNums[r]])
                // 去重 l 和 r 项
                while (l < r && nums[l] === nums[l + 1]) {
                    l++
                }
                while (l < r && nums[r] === nums[r - 1]) {
                    r--
                }
                // 去重后的指针移动
                l++
                r--
            }
        }
    }
    return res
};