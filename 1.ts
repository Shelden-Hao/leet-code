function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>()
    const length = nums.length
    for (let i = 0; i < length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i])!, i]
        }
        map.set(nums[i], i)
    }
    return [-1, -1]
};

export {}
