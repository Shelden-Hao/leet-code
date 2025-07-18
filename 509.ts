/**
 * 509. 斐波那契数 - 递归求解
 * @param n
 */
// function fib(n: number): number {
//     if (n <= 1) return n
//     return fib(n - 1) + fib(n - 2)
// };

/**
 * 509. 斐波那契数 - 记忆化搜索
 * @param n
 * @param memo
 */
// function fib(n: number, memo: number[] = []): number {
//     if (n <= 1) {
//         memo[n] = n
//         return n
//     }
//     if (memo[n]) return memo[n]
//     const res = fib(n - 1, memo) + fib(n - 2, memo)
//     memo[n] = res
//     return res
// };

/**
 * 509. 斐波那契数 - 动态规划
 * @param n
 * @param memo
 */
function fib(n: number): number {
    const memo:number[] = []
    for (let i = 0; i <= n; i++) {
        // 初始化 0 和 1 对应的位置
        if (i <= 1) {
            memo[i] = i
            continue
        }
        memo[i] = memo[i - 1] + memo[i - 2]
    }
    return memo[n]
};