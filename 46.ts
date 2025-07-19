/**
 * 全排列
 * @param nums 原数组
 * @description
 * 将全排列的过程看成是一棵树进行深度优先搜索的过程，
 * 每一轮搜索都是一个path，题目的要求就是得到所有的path
 */
function permute(nums: number[]): number[][] {
    // 最终结果
    const res: number[][] = []
    // 某个路径结果数组
    const path: number[] = []
    // 当前数组元素使用情况映射
    const used:boolean[] = new Array(nums.length).fill(false)

    function dfs() {
        // 递归终止条件
        if (path.length === nums.length) {
            res.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) {
                continue
            }
            // 将当前读取元素添加到当前路径数组
            path.push(nums[i])
            used[i] = true
            // 继续递归
            dfs()
            // 使用完当前元素需要弹出数组
            path.pop()
            used[i] = false
        }
    }

    dfs()
    return res
};