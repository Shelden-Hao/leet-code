/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const m = word1.length;
    const n = word2.length;
    // 创建一个 dp 二维数组 用来记录 操作 word1 的第 i 个元素 和 word2 的第 j 个元素的最小步数
    const dp = Array.from({length: m + 1}, () => new Array(n + 1).fill(0));
    // 初始化 边界
    // 初始化后的二维数组图示
    /*
    * [0,0],[0,1],[0,2],[0,3],
    * [1,0],...
    * [2,0],...
    * [3,0],...
    * [4,0],...
    * [5,0],...
    * */
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let i = 0; i <= n; i++) {
        dp[0][i] = i;
    }
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                // 全部换成删除操作 再加一个操作数 便于理解
                dp[i][j] = Math.min(
                    dp[i][j - 1] + 1, // 插入 相当于 word2 删除一个元素
                    dp[i - 1][j] + 1, // 删除 相当于 word1 删除一个元素
                    dp[i - 1][j - 1] + 1 // 替换 相当于 word1 和 word2 都删除一个元素
                )
            }
        }
    }
    return dp[m][n];
};
