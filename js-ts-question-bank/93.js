/**
 * 93. Restore IP Addresses
 * 这道题的解决思路还是有难度的，如何使用回溯，如何判断条件都是难点！！！
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const result = [];
    // 先找结束遍历的条件
    // 之后再正常处理数据
    /**
     * 回溯
     * @param start 当前遍历的位置索引
     * @param path 当前已经找到的ip地址片段
     */
    function backtrack(start, path) {
        // 决定回溯树的深度
        if (path.length === 4) {
            // 决定结束条件
            if (start === s.length) {
                result.push(path.join('.'))
            }
            return;
        }
        // 单层搜索的逻辑
        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) {
                break;
            }
            const segment = s.slice(start, start + len);
            if ((segment.length > 1 && segment.startsWith('0')) || Number(segment) > 255) {
                continue
            }
            // 片段满足要求
            path.push(segment);
            backtrack(start + len, path);
            path.pop();
        }
    }

    backtrack(0, []);
    return result;
};
