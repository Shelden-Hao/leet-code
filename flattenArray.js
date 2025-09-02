/**
 * 手写数组拍平 - 递归
 * @param arr
 */
function flattenArray(arr) {
    const res = []
    for (const item of arr) {
        if (Array.isArray(item)) {
            res.push(...flattenArray(item))
        } else {
            res.push(item)
        }
    }
    return res
}

/**
 * 手写数组拍平 - 使用栈
 * @param arr
 */
// function flattenArray(arr) {
//     const stack = [...arr]
//     const res = []
//
//     while (stack.length) {
//         const item = stack.pop()
//         if (Array.isArray(item)) {
//             stack.push(...item)
//         } else {
//             res.push(item)
//         }
//     }
//     // 由于使用了栈，所以结果要反转
//     return res.reverse()
// }

/**
 * 手写数组拍平 - 支持指定拍平深度
 * @param arr
 * @param depth
 * @return {*|*[]}
 */
// function flattenArray(arr, depth = 1) {
//     if (depth === 0) return arr.slice()
//     const res = []
//     for (let item of arr) {
//         if (Array.isArray(item)) {
//             res.push(...flattenArray(item, depth - 1))
//         } else {
//             res.push(item)
//         }
//     }
//     return res
// }

/**
 * 手写数组拍平 - es 原生写法
 * @param arr
 * @return {FlatArray<*, number>[]}
 */
// function flattenArray(arr) {
//     return arr.flat(Infinity)
// }

console.log(flattenArray([1, [2, [3, [4]], 5]]))
