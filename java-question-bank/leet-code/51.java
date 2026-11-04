/**
 * [51. N 皇后](https://leetcode.cn/problems/n-queens/)
 */
class Solution {
    public List<List<String>> solveNQueens(int n) {
        boolean[] column = new boolean[n];
        boolean[] diag1 = new boolean[2 * n];
        boolean[] diag2 = new boolean[2 * n];
        List<List<String>> ans = new ArrayList<>();
        dfs(0, new ArrayList<>(), column, diag1, diag2, ans);
        return ans;
    }

    private void dfs(int row, List<String> list, boolean[] column, boolean[] diag1, boolean[] diag2,
                     List<List<String>> ans) {
        int n = column.length;
        if (row == n) {
            ans.add(new ArrayList<>(list));
            return;
        }
        for (int i = 0; i < n; i++) {
            // 两条对角线分别用 row+i 与 row-i+n 编码，越界检查也被数组范围兜住
            if (column[i] || diag1[row + i] || diag2[row - i + n]) continue;
            StringBuilder sb = new StringBuilder(".".repeat(n));
            sb.setCharAt(i, 'Q');
            column[i] = true;
            diag1[row + i] = true;
            diag2[row - i + n] = true;
            list.add(sb.toString());
            dfs(row + 1, list, column, diag1, diag2, ans);
            list.remove(list.size() - 1);
            column[i] = false;
            diag1[row + i] = false;
            diag2[row - i + n] = false;
        }
    }
}
