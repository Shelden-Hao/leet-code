import java.util.*;

/**
 * [手写/通用] 双指针
 * 两种形态：首尾对撞（有序两数和、盛水容器，每次缩掉不可能更优的一侧）、快慢同向（原地去重）。
 */
class TwoPointers {
    public static void main(String[] args) {
        check(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9)), "[1, 2]", "有序数组两数和");
        check(Arrays.toString(twoSum(new int[]{1, 2, 3, 4}, 9)), "[]", "无解");
        check(maxArea(new int[]{1, 8, 6, 2, 5, 4, 8, 3, 7}), 49, "盛最多水的容器");
        check(removeDuplicates(new int[]{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}), 5, "原地去重长度");
        System.out.println("双指针 全部通过");
    }

    public static int[] twoSum(int[] nums, int target) {
        int l = 0, r = nums.length - 1;
        while (l < r) {
            int sum = nums[l] + nums[r];
            if (sum == target) return new int[]{l + 1, r + 1};
            if (sum < target) l++;
            else r--;
        }
        return new int[0];
    }

    public static int maxArea(int[] h) {
        int l = 0, r = h.length - 1, ans = 0;
        while (l < r) {
            ans = Math.max(ans, Math.min(h[l], h[r]) * (r - l));
            if (h[l] < h[r]) l++;
            else r--;
        }
        return ans;
    }

    public static int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        int slow = 1;
        for (int fast = 1; fast < nums.length; fast++) {
            if (nums[fast] != nums[slow - 1]) nums[slow++] = nums[fast];
        }
        return slow;
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
