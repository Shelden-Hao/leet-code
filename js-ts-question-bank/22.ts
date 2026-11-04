/**
 * 22. 括号生成
 * https://leetcode.cn/problems/generate-parentheses/description/
 * @param n 括号的对数
 * @description 回溯。
 * - 过程：任何前缀中，左括号 `(` 的数量都不能少于右括号 `)` 的数量。 最终左括号和右括号数量相等，都是 n。
 * - 思路：构造的字符串 path，左括号数 left，右括号数 right。按照如下规则：
 * > 规则：
 * 如果 left < n，可以放一个左括号 "("。
 * 如果 right < left，可以放一个右括号 ")"。
 * 当 left === n && right === n，说明生成了一个合法的括号组合，加入结果集。
 */
function generateParenthesis(n: number): string[] {
    const res: string[] =[]
    function backtrack(path: string, left: number, right: number) {
        if (left === n && right === n) {
            res.push(path)
            return
        }
        if (left < n) {
            backtrack(path + '(', left + 1, right)
        }
        if (right < left) {
            backtrack(path + ')', left, right + 1)
        }
    }
    backtrack('', 0, 0)
    return res
};

export {}

// start: ""  left=0 right=0
// ├─ "("  left=1 right=0
// │   ├─ "("  left=2 right=0
// │   │   ├─ "("  left=3 right=0
// │   │   │   └─ ")"  left=3 right=1
// │   │   │       └─ ")"  left=3 right=2
// │   │   │           └─ ")"  left=3 right=3  ✅ "((()))"
// │   │   └─ ")" ...
// │   └─ ")" ...
// └─ （其他分支）
