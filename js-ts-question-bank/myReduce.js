/**
 * 手写 Array.prototype.reduce() - 循环版本
 */
Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== 'function') throw new Error(callback + 'is not a function')

    const arr = this
    let accumulator, startIndex

    // 判断是否传入初始值
    if (initialValue !== undefined) {
        accumulator = initialValue
        startIndex = 0
    } else {
        // 没有初始值并且数组为空时报错
        if (arr.length === 0) throw new Error('Reduce of empty array with no initial value')
        // 默认初始值是数组第一项，默认开始索引为数组第二项
        accumulator = arr[0]
        startIndex = 1
    }
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr)
    }
    return accumulator
};

/**
 * 手写 Array.prototype.reduce() - 递归版本
 */
// Array.prototype.myReduce = function (callback, initialValue) {
//     if (typeof callback !== 'function') throw new Error(callback + 'is not a function')
//
//     const arr = this
//
//     // 处理空数组且没有初始值的情况
//     if (arr.length === 0 && initialValue === undefined) throw new Error('Reduce of empty array with no initial value')
//
//     // 递归函数
//     const recursive = (index, acc) => {
//         if (index >= arr.length) return acc
//         return recursive(index + 1, callback(acc, arr[index], index, arr))
//     }
//
//     // 判断是否传入初始值
//     if (initialValue !== undefined) return recursive(0, initialValue)
//     else return recursive(1, arr[0])
// };

// 1. 求和
console.log([1, 2, 3, 4].myReduce((acc, cur) => acc + cur, 0))
// 输出 10

// 2. 不传初始值
console.log([1, 2, 3, 4].myReduce((acc, cur) => acc + cur))
// 输出 10

// 3. 空数组 + 初始值
console.log([].myReduce((acc, cur) => acc + cur, 100))
// 输出 100

// 4. 空数组 + 没有初始值
// console.log([].myReduce((acc, cur) => acc + cur))
// 抛错：TypeError
