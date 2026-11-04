/**
 * 手写 Array.prototype.filter
 * @param callback 回调函数
 * @param thisArg this 指向
 * @return {*[]} 过滤出来的新数组
 */
Array.prototype.myFilter = function (callback, thisArg) {
    if (typeof callback !== "function") {
        throw new TypeError(callback + " is not a function");
    }

    // 处理类数组的情况
    const arr = Object(this)
    const len = arr.length
    const res = []
    for (let index = 0; index < len; index++) {
        const element = arr[index]
        if (callback.call(thisArg, element, index, arr)) {
            res.push(element)
        }
    }
    return res
};
const arr = [1, 2, 3, 4, 5];

// 取偶数
console.log(arr.myFilter(n => n % 2 === 0));
// [2, 4]

// 结合 thisArg
const obj = { limit: 3 };
console.log(arr.myFilter(function(n) {
    return n < this.limit;
}, obj));
// [1, 2]
