/**
 * [739. 每日温度](https://leetcode.cn/problems/daily-temperatures/)
 */
class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int n = temperatures.length;
        int[] ans = new int[n];
        // 从右往左维护一个单调递减栈，栈顶就是右边第一个更高的温度
        Deque<Integer> stack = new LinkedList<>();
        for (int i = n - 1; i >= 0; i--) {
            while (!stack.isEmpty() && temperatures[stack.peek()] <= temperatures[i]) {
                stack.pop();
            }
            ans[i] = stack.isEmpty() ? 0 : stack.peek() - i;
            stack.push(i);
        }
        return ans;
    }
}
