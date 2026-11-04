/**
 * 165. 比较版本号 - 方法一
 * https://leetcode.cn/problems/compare-version-numbers/description/
 * @param version1
 * @param version2
 * @description split 分割，然后每一项分别比较。
 * 但是这种做法如果字符串很长的话，split 时间复杂度为 O(n)，我们并不一定会比较到最后项，浪费性能。
 */
function compareVersion(version1: string, version2: string): number {
    const arr1 = version1.split('.').map(item => Number(item))
    const arr2 = version2.split('.').map(item => Number(item))

    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        if (arr1[i] === undefined) arr1[i] = 0
        if (arr2[i] === undefined) arr2[i] = 0
        if (arr1[i] < arr2[i]) {
            return -1
        }
        if (arr1[i] > arr2[i]) {
            return 1
        }
    }
    return 0
};

/**
 * 165. 比较版本号 - 方法一
 * https://leetcode.cn/problems/compare-version-numbers/description/
 * @param version1
 * @param version2
 * @description 迭代器一边迭代分割一边比较，
 */
// function compareVersion(version1: string, version2: string): number {
//     const iter1 = walk(version1)
//     const iter2 = walk(version2)
//     let res1 = iter1.next()
//     let res2 = iter2.next()
//     while (!res1.done || !res2.done) {
//         // iter1.next() 是有副作用的 —— 每次调用都会前进一步。所以想要保留每次的值必须用一个变量接收。
//         const char1 = res1.value ?? 0
//         const char2 = res2.value ?? 0
//         if (char1 < char2) return -1
//         if (char1 > char2) return 1
//         // 然后才走下一步，注意一定使用 iter 调用，他无返回值，不支持链式调用
//         res1 = iter1.next()
//         res2 = iter2.next()
//     }
//     return 0
// };

/**
 * 生成器函数，每走一步到下一个number
 * @param str
 */
// function* walk(str: string) {
//     let s = ''
//     for (let char of str) {
//         if (char === '.') {
//             const value = Number(s)
//             s = ''
//             yield value
//         } else {
//             s += char
//         }
//     }
//     if (s) yield Number(s)
// }

export {}
