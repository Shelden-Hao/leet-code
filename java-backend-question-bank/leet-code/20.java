/**
 * [20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/)
 */
class Solution {
    public boolean isValid(String s) {
        Deque<Character> stack = new LinkedList<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                // 右括号必须和栈顶的左括号配对
                if (c == ')') {
                    if (stack.isEmpty() || stack.pop() != '(') return false;
                } else if (c == '}') {
                    if (stack.isEmpty() || stack.pop() != '{') return false;
                } else {
                    if (stack.isEmpty() || stack.pop() != '[') return false;
                }
            }
        }
        return stack.isEmpty();
    }
}
