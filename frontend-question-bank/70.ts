/**
 * 70. 爬楼梯 - 动态规划（状态压缩）
 * @param n 爬到第 n 阶楼梯
 * https://leetcode.cn/problems/climbing-stairs/
 */
function climbStairs(n: number): number {
    let pre = 1
    let cur = 1;
    for (let i = 2; i <= n; i++) {
        const newVal = pre + cur
        pre = cur
        cur = newVal
    }
    return cur
};

/**
 * 70. 爬楼梯 - 动态规划（基本做法）
 * @param n
 */
// function climbStairs(n: number): number {
//     // 定义状态
//     const dp: number[] =[]
//     // 初始化状态
//     dp[0] = 1
//     dp[1] = 1
//     // 状态转移方程 求出数组的每一项
//     for (let i = 2; i <= n; i++) {
//         dp[i] = dp[i - 1] + dp[i - 2]
//     }
//     return dp[n]
// };
