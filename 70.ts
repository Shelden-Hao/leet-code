/**
 * 爬楼梯
 * @param n 爬到第 n 阶楼梯
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