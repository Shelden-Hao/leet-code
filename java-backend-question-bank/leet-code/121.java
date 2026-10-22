/**
 * [121. 买卖股票的最佳时机](https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/)
 */
class Solution {
    public int maxProfit(int[] prices) {
        int ans = 0;
        int buy = 0;
        // 只维护历史最低买入点，每天尝试卖出
        for (int j = 0; j < prices.length; j++) {
            ans = Math.max(ans, prices[j] - prices[buy]);
            if (prices[j] < prices[buy]) {
                buy = j;
            }
        }
        return ans;
    }
}
