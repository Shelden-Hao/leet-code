/**
 * [394. 字符串解码](https://leetcode.cn/problems/decode-string/)
 */
class Solution {
    public String decodeString(String s) {
        Deque<String> stack = new LinkedList<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c != ']') {
                stack.push(String.valueOf(c));
            } else {
                // 先把 [] 里的字符串拼出来
                StringBuilder str = new StringBuilder();
                while (!"[".equals(stack.peek())) {
                    str.insert(0, stack.pop());
                }
                stack.pop();
                // 再拼出数字（可能是多位）
                StringBuilder number = new StringBuilder();
                while (!stack.isEmpty() && !stack.peek().isEmpty() && Character.isDigit(stack.peek().charAt(0))) {
                    number.insert(0, stack.pop());
                }
                stack.push(str.toString().repeat(Integer.parseInt(number.toString())));
            }
        }
        StringBuilder ans = new StringBuilder();
        while (!stack.isEmpty()) {
            ans.insert(0, stack.pop());
        }
        return ans.toString();
    }
}
