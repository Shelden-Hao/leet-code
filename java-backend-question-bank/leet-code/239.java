/**
 * [239. 滑动窗口最大值](https://leetcode.cn/problems/sliding-window-maximum/)
 */
class Solution {
    public int[] maxSlidingWindow(int[] nums, int k) {
        int n = nums.length;
        Deque<Integer> q = new LinkedList<>();
        int[] ans = new int[n - k + 1];
        for (int i = 0; i < n; i++) {
            while (!q.isEmpty() && nums[q.getLast()] <= nums[i]) q.removeLast();
            q.addLast(i);
            if (i - q.getFirst() + 1 > k) q.removeFirst();
            if (i >= k - 1) ans[i - k + 1] = nums[q.getFirst()];
        }
        return ans;
    }
}