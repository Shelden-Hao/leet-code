/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length - 1;
    let left_max = height[left];
    let right_max = height[right];
    let totalWater = 0;
    while (left < right) {
        if (height[left] <= height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                totalWater += left_max - height[left];
            }
            left++
        } else {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                totalWater += right_max - height[right];
            }
            right--;
        }
    }
    return totalWater;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (height.length === 0) return 0;
    let left = 0;
    let right = height.length - 1;
    let left_max = 0;
    let right_max = 0;
    let totalWater = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= left_max) {
                left_max = height[left];
            } else {
                totalWater+= left_max - height[left];
            }
            left++
        }  else  {
            if (height[right] >= right_max) {
                right_max = height[right];
            } else {
                totalWater += right_max - height[right];
            }
            right--
        }
    }
    return totalWater;
};
