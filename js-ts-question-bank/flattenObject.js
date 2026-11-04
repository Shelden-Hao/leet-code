/**
 * 1. 基本扁平化
 * @param obj 原对象
 * @param parentKey 父节点key
 * @param res 初始化结果
 * @return {{}} 最终结果
 */
// function flattenObject(obj, parentKey = '', res = {}) {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const newKey = parentKey ? `${parentKey}.${key}` : `${key}`
//             if (typeof obj[key] === 'object' && typeof obj[key] !== null) {
//                 flattenObject(obj[key], newKey, res)
//             } else {
//                 res[newKey] = obj[key]
//             }
//         }
//     }
//     return res
// }
// // // 1. 基本扁平化
// const obj = {
//     a: 1,
//     b: {
//         c: 2,
//         d: {
//             e: 3
//         }
//     }
// }
// console.log(flattenObject(obj))
// // =====> 输出：
// {
//     "a": 1,
//     "b.c": 2,
//     "b.d.e": 3
// }

/**
 * 2. 支持数组
 */
// function flattenObject(obj, parentKey = '', res = {}) {
//     if (typeof obj !== 'object' || obj === null) {
//         res[parentKey] = obj
//         return res
//     }
//
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             const newKey = parentKey ? `${parentKey}.${key}` : `${key}`
//             flattenObject(obj[key], newKey, res)
//         }
//     }
//     return res;
// }
// const obj = {
//     a: [1, 2, { x: 3 }],
//     b: { c: 4 }
// }
// console.log(flattenObject(obj))
// // ====> 输出：
// {
//     "a.0": 1,
//     "a.1": 2,
//     "a.2.x": 3,
//     "b.c": 4
// }

/**
 * 3. 一行实现对象扁平化
 */
const flattenObject = (obj, parentKey = '') =>
    Object.entries(obj).reduce((res, [key, value]) => (
        typeof value === 'object' && value !== null
            ? {...res, ...flattenObject(value, parentKey + key + '.')}
            : {...res, [parentKey + key]: value}
    ), {})

const obj = { a: 1, b: { c: 2, d: { e: 3 } } }
console.log(flattenObject(obj))
// { a: 1, 'b.c': 2, 'b.d.e': 3 }
