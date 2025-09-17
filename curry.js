/**
 * 函数柯里化 curry
 * @param fn
 * @return {(function(...[*]): (*))|*}
 */
function curry(fn) {
    return function curried(...args) {
        // 如果参数够了，直接执行
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        // 否则返回一个函数，继续收集参数
        return function (...nextArgs) {
            return curried.apply(this, args.concat(nextArgs));
        };
    };
}
// function sum(a, b, c) {
//     return a + b + c;
// }
//
// const curriedSum = curry(sum);
//
// console.log(curriedSum(1)(2)(3)); // 6
// console.log(curriedSum(1, 2)(3)); // 6
// console.log(curriedSum(1)(2, 3)); // 6
