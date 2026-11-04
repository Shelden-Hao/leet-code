// 实现 (a == 1 && a == 2 && a == 3) 为 true

/**
 * 方法一：利用对象隐式转换调用 toString
 */
// const a = {
//     i: 1,
//     toString() {
//         return a.i++
//     }
// }
// console.log(a == 1 && a == 2 && a == 3)

/**
 * 方法二：利用数组隐式转换调用 join 方法（join方法的本质也是调用的toString）
 */
// const a = [1,2,3]
// a.join = a.shift
// console.log(a == 1 && a == 2 && a == 3)

/**
 * 方法三：利用 defineProperty
 */
let val = 0
Object.defineProperty(global, 'a', {
    get: function () {
        return ++val
    },
})
console.log(a == 1 && a == 2 && a == 3)
