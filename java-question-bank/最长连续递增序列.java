/**
 * [手写] 最长连续递增序列
 * 一次遍历：比前一个大就累加当前段长度，否则重新从 1 开始，过程中记录最大值。
 */
class LongestContinuousIncreasing {
    public static void main(String[] args) {
        check(findLength(new int[]{1, 3, 5, 4, 7}), 3, "1,3,5");
        check(findLength(new int[]{2, 2, 2, 2, 2}), 1, "全相等");
        check(findLength(new int[]{}), 0, "空数组");
        check(findLength(new int[]{1, 2, 3, 4}), 4, "全递增");
        System.out.println("最长连续递增序列 全部通过");
    }

    public static int findLength(int[] nums) {
        if (nums.length == 0) return 0;
        int ans = 1, cur = 1;
        for (int i = 1; i < nums.length; i++) {
            cur = nums[i] > nums[i - 1] ? cur + 1 : 1;
            ans = Math.max(ans, cur);
        }
        return ans;
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
