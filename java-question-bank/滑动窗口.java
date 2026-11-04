import java.util.*;

/**
 * [手写/通用] 滑动窗口
 * 右端点不断扩张，窗口不满足约束时收缩左端点，每个元素最多进出一次，整体 O(n)。
 * 下面给出面试最常考的两个模板：求和最短子数组、无重复最长子串。
 */
class SlidingWindow {
    public static void main(String[] args) {
        check(minSubArrayLen(7, new int[]{2, 3, 1, 2, 4, 3}), 2, "和 >= 7 的最短子数组");
        check(minSubArrayLen(100, new int[]{1, 2, 3}), 0, "无解返回 0");
        check(lengthOfLongestSubstring("abcabcbb"), 3, "无重复最长子串");
        check(lengthOfLongestSubstring("bbbbb"), 1, "全重复");
        check(lengthOfLongestSubstring("pwwkew"), 3, "wke");
        System.out.println("滑动窗口 全部通过");
    }

    public static int minSubArrayLen(int target, int[] nums) {
        int left = 0, sum = 0, ans = Integer.MAX_VALUE;
        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];
            while (sum >= target) {
                ans = Math.min(ans, right - left + 1);
                sum -= nums[left++];
            }
        }
        return ans == Integer.MAX_VALUE ? 0 : ans;
    }

    public static int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> last = new HashMap<>();
        int left = 0, ans = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            Integer prev = last.get(c);
            if (prev != null && prev >= left) left = prev + 1;
            last.put(c, right);
            ans = Math.max(ans, right - left + 1);
        }
        return ans;
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
