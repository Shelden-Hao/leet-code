/**
 * [22. 括号生成](https://leetcode.cn/problems/generate-parentheses/)
 */
class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> ans = new ArrayList<>();
        dfs(new StringBuilder(), 0, n, ans);
        return ans;
    }

    private void dfs(StringBuilder sb, int pre, int n, List<String> ans) {
        // pre 表示当前未匹配的左括号数，一旦为负说明右括号多了，直接剪枝
        if (pre < 0) return;
        if (sb.length() == n * 2) {
            if (pre == 0) {
                ans.add(sb.toString());
            }
            return;
        }
        sb.append('(');
        dfs(sb, pre + 1, n, ans);
        sb.deleteCharAt(sb.length() - 1);

        sb.append(')');
        dfs(sb, pre - 1, n, ans);
        sb.deleteCharAt(sb.length() - 1);
    }
}
