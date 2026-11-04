/**
 * 手写 Array.prototype.sort
 * @param {Function} compareFn 对比函数
 * @returns {Array} 排序后的数组
 */
Array.prototype.mySort = function (compareFn) {
  if (typeof compareFn !== "function") {
    throw new Error("compareFn is not a function");
  }
  const arr = this;
  const sorted = quickSort(arr, compareFn);
  for (let i = 0; i < sorted.length; i++) {
    arr[i] = sorted[i];
  }
  return arr;
};

/**
 * 快速排序
 * @param {Array} arr 原数组
 * @param {Function} compareFn 对比函数
 * @returns {Array} 排序后的数组
 */
function quickSort(arr, compareFn) {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (compareFn(arr[i], pivot) < 0) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left, compareFn), pivot, ...quickSort(right, compareFn)];
}
