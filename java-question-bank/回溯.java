import java.util.*;

/**
 * [手写/通用] 回溯
 * 统一骨架：做选择 -> 递归下一层 -> 撤销选择。三类高频题都用同一套模板，区别只在 start 与去重方式。
 */
class BacktrackingDemo {
    public static void main(String[] args) {
        List<List<Integer>> ps = permute(new int[]{1, 2, 3});
        check(ps.size(), 6, "全排列数量");
        Set<String> uniq = new HashSet<>();
        for (List<Integer> p : ps) uniq.add(p.toString());
        check(uniq.size(), 6, "全排列不重复");
        check(subsets(new int[]{1, 2, 3}).size(), 8, "子集数量");
        check(combine(4, 2).size(), 6, "C(4,2)");
        check(combinationSum2(new int[]{10, 1, 2, 7, 6, 1, 5}, 8).size(), 4, "组合总和 II 去重后数量");
        System.out.println("回溯 全部通过");
    }

    public static List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        boolean[] used = new boolean[nums.length];
        dfsPermute(nums, used, new ArrayList<>(), ans);
        return ans;
    }

    private static void dfsPermute(int[] nums, boolean[] used, List<Integer> path, List<List<Integer>> ans) {
        if (path.size() == nums.length) {
            ans.add(new ArrayList<>(path));
            return;
        }
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.add(nums[i]);
            dfsPermute(nums, used, path, ans);
            path.remove(path.size() - 1);
            used[i] = false;
        }
    }

    public static List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> ans = new ArrayList<>();
        dfsSubsets(nums, 0, new ArrayList<>(), ans);
        return ans;
    }

    private static void dfsSubsets(int[] nums, int start, List<Integer> path, List<List<Integer>> ans) {
        ans.add(new ArrayList<>(path));
        for (int i = start; i < nums.length; i++) {
            path.add(nums[i]);
            dfsSubsets(nums, i + 1, path, ans);
            path.remove(path.size() - 1);
        }
    }

    public static List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> ans = new ArrayList<>();
        dfsCombine(n, k, 1, new ArrayList<>(), ans);
        return ans;
    }

    private static void dfsCombine(int n, int k, int start, List<Integer> path, List<List<Integer>> ans) {
        if (path.size() == k) {
            ans.add(new ArrayList<>(path));
            return;
        }
        for (int i = start; i <= n - (k - path.size()) + 1; i++) {
            path.add(i);
            dfsCombine(n, k, i + 1, path, ans);
            path.remove(path.size() - 1);
        }
    }

    public static List<List<Integer>> combinationSum2(int[] candidates, int target) {
        Arrays.sort(candidates);
        List<List<Integer>> ans = new ArrayList<>();
        dfsCombination(candidates, target, 0, new ArrayList<>(), ans);
        return ans;
    }

    private static void dfsCombination(int[] c, int rest, int start, List<Integer> path, List<List<Integer>> ans) {
        if (rest == 0) {
            ans.add(new ArrayList<>(path));
            return;
        }
        for (int i = start; i < c.length; i++) {
            if (c[i] > rest) break;
            if (i > start && c[i] == c[i - 1]) continue;
            path.add(c[i]);
            dfsCombination(c, rest - c[i], i + 1, path, ans);
            path.remove(path.size() - 1);
        }
    }

    private static void check(Object a, Object e, String name) {
        if (!java.util.Objects.equals(a, e)) throw new AssertionError(name + " 期望 " + e + "，实际 " + a);
    }
}
