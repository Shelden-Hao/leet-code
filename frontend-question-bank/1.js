/**
 * 在数组中寻找两个数，使它们的和等于目标值
 * @param {number[]} nums - 输入的数字数组
 * @param {number} target - 目标值
 * @returns {number[]} - 返回两个数的索引数组
 */
function twoSum(nums, target) {
    // 创建一个 Map 用于存储数字和索引
    const map = new Map();
    // 遍历数组中的每个数字
    for (let i = 0; i < nums.length; i++) {
        // 计算当前数需要的补数
        const complement = target - nums[i];
        // 如果 map 中已经存在这个补数
        if (map.has(complement)) {
            // 找到匹配的两个数，返回它们的索引
            return [map.get(complement), i];
        }
        // 将当前数字和它的索引存入 map
        map.set(nums[i], i);
    }
}
