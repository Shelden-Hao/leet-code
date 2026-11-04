/**
 * [32. 最长有效括号](https://leetcode.cn/problems/longest-valid-parentheses/)
 */
class Solution {
    public int longestValidParentheses(String s) {
        int n = s.length();
        Deque<Integer> stack = new LinkedList<>();
        boolean[] valid = new boolean[n];
        // 先用栈标记所有参与配对的位置，再找最长的连续 true 段
        for (int i = 0; i < n; i++) {
            char c = s.charAt(i);
            if (c == '(') {
                stack.push(i);
            } else if (!stack.isEmpty()) {
                valid[i] = true;
                valid[stack.pop()] = true;
            }
        }
        int len = 0;
        int ans = 0;
        for (int i = 0; i < n; i++) {
            if (valid[i]) {
                len++;
                ans = Math.max(ans, len);
            } else {
                len = 0;
            }
        }
        return ans;
    }
}
