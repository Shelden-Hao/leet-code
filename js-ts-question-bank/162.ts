/**
 * 162. 寻找峰值
 * @param nums 数组
 * @returns 峰值索引
 * @description 二分查找，时间复杂度为 O(log n)。
 */
function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  // 之所以相等可以想象数组只有一个值
  // 右指针开始最后一个值，左指针开始第一个值，相等时仍会继续；
  // 但是如果右指针为 length+1，那么他们相等时就意味着需要退出循环
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // 只需要判断一侧就好，因为我们要找哪边一定有峰，而不是判断mid是不是峰
    // 可以假设单调数组来思考，如果右边比左边大，那么右边一定有峰，我们只需要不断往右边找就行了，直到最后一个值
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
