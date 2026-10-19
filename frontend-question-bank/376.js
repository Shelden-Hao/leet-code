/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function(nums) {
    let count = 0;
    let flag = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 && flag === 0) {
            if (nums[i] !== nums[i + 1]) {
                count++;
                flag = nums[i + 1] - nums[i];
            }
            continue;
        }
        if (flag > 0) {
            if (nums[i + 1] < nums[i]) {
                count++;
                flag = nums[i + 1] - nums[i];
            }
            continue;
        }
        if (flag < 0) {
            if (nums[i + 1] > nums[i]) {
                count++;
                flag = nums[i + 1] - nums[i];
            }
            continue;
        }
    }
    return count;
};
const nums = [1,7,4,9,2,5]
console.log(wiggleMaxLength(nums))