/**
 * 用 reduce 实现 map
 * @param callback 回调函数
 * @param thisArg this指向
 */
Array.prototype.myMap = function (callback, thisArg) {
    const res = []
    return this.reduce((acc, cur, index, arr) => {
        // callback 传参：cur 当前正在处理的元素，index 正在处理的元素在数组中的索引，arr 调用了 map 的数组本身
        acc.push(callback.call(thisArg, cur, index, arr))
        return acc
    }, [])
};

const arr = [1, 2, 3, 4];

const mapped = arr.myMap(x => x * 2);
console.log(mapped); // [2, 4, 6, 8]
// 支持 thisArg
const obj = { factor: 3 };
const mapped2 = arr.myMap(function(x) { return x * this.factor }, obj);
console.log(mapped2); // [3, 6, 9, 12]
