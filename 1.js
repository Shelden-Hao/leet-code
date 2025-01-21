function twoSum(nums, target) {
    const map = new Map();  // 创建一个 Map 用于存储数字和索引
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];  // 计算当前数需要的补数
        if (map.has(complement)) {
            return [map.get(complement), i];  // 找到匹配的两个数，返回它们的索引
        }
        map.set(nums[i], i);  // 将当前数字和它的索引存入 map
    }
}
