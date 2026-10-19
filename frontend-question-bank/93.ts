/**
 * 93. 复原 IP 地址
 * https://leetcode.cn/problems/restore-ip-addresses/description/
 * @param s 未格式化的IP地址字符串
 * @description dfs 深度优先搜索。 决策树的每一个节点都代表一个数字(ip 片段)，一条路径上的所有数字组合起来形成一个 ip。
 * 难点：在于求这个 ip 片段。决策树的每次递归都是从 startIndex 加上 1~3 形成片段，再判断是否合法。然后 path 该元素进行回溯。
 * 退出 dfs 条件：切成 4 段并且 startIndex 刚好在 s.length 处。
 */
function restoreIpAddresses(s: string): string[] {
    // 最终结果
    const res: string[] = []
    // 一次路径的结果
    const path: string[] =[]
    function backtrack(startIndex: number) {
        // 结束条件：已经切割成了4段
        if (path.length === 4) {
            // 并且刚好最终起始切割位置为 s.length
            if (startIndex === s.length) {
                res.push(path.join('.'))
            }
            return
        }

        // len 表示本地要截取的 ip 的长度，只能是 1~3
        // 🔄 尝试取 1位、2位、3位 作为下一段
        for (let len = 1; len <=3 ; len++) {
            if (startIndex + len > s.length) break
            // 截取 ip 片段（左闭右开，所以上述终止遍历条件没有等号）
            const segment = s.substring(startIndex, startIndex + len)

            // 前导零非法 需排除
            if (segment.length > 1 && segment[0] === '0') break
            // 大小必须在 0~255 之间
            if (Number(segment) > 255) break

            path.push(segment)
            // 🔄 递归：处理下一段
            backtrack(startIndex + len)
            // 🔄 回溯：撤销选择，恢复 path 状态
            path.pop()
        }
    }
    backtrack(0)
    return res
};