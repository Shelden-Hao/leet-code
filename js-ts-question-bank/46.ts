/**
 * 46. 全排列
 * @param nums 原数组
 * @description
 * 将全排列的过程看成是一棵树进行深度优先搜索的过程，
 * 每一轮搜索都是一个path，题目的要求就是得到所有的path。
 * 使用 used 数组来维护是否已经被使用 使用多一个 O(n) 的空间复杂度来换取少一个 O(n) 的时间复杂度
 */
// function permute(nums: number[]): number[][] {
//     // 最终结果
//     const res: number[][] = []
//     // 某个路径结果数组
//     const path: number[] = []
//     // 当前数组元素使用情况映射
//     const used:boolean[] = new Array(nums.length).fill(false)
//
//     function dfs() {
//         // 递归终止条件
//         if (path.length === nums.length) {
//             res.push([...path])
//             return
//         }
//
//         for (let i = 0; i < nums.length; i++) {
//             if (used[i]) {
//                 continue
//             }
//             // 将当前读取元素添加到当前路径数组
//             path.push(nums[i])
//             used[i] = true
//             // 继续递归
//             dfs()
//             // 使用完当前元素需要弹出数组
//             path.pop()
//             used[i] = false
//         }
//     }
//
//     dfs()
//     return res
// };

// 时间复杂度较高的写法
// 循环复杂度为 O(n) includes 复杂度为 O(n) 所以内层循环复杂度为 O(n²)
// 然后外层递归复杂度为多叉树的节点个数 也就是 O(n!)
// 所以时间复杂度为 O(n²n!)
function permute(nums: number[]): number[][] {
    const n = nums.length
    const result: number[][] = []
    const path: number[] = []
    function backtrack() {
        if (path.length === n) {
            // result.push(path) 相当于直接把path 的引入加入到result中，所以我们可以使用解构每次都加入一个新的引用
            result.push([...path])
            return
        }
        for (let i = 0; i < n; i++) {
            if (!path.includes(nums[i])) {
                path.push(nums[i])
                backtrack()
                path.pop()
            }
        }
    }
    backtrack()
    return result
};
