/**
 * memoize - 记忆化函数
 * 将已经计算过的结果缓存起来，避免重复计算
 * @param {Function} fn 原函数
 * @returns 记忆化函数
 */
function memoize(fn) {
    const cache = new Map()
    return function(...args) {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            return cache.get(key)
        } else {
            const result = fn.apply(this, args)
            cache.set(key, result)
            return result
        }
    }
}
// function add(a, b) {
//   console.log('计算中...');
//   return a + b;
// }
// const memoAdd = memoize(add);
// console.log(memoAdd(1, 2)); // 输出 "计算中..." -> 3
// console.log(memoAdd(1, 2)); // 直接从缓存取结果 -> 3
