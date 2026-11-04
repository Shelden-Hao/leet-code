/**
 * [118. 杨辉三角](https://leetcode.cn/problems/pascals-triangle/)
 */
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> ans = new ArrayList<>();
        List<Integer> first = new ArrayList<>();
        first.add(1);
        ans.add(first);
        for (int i = 2; i <= numRows; i++) {
            List<Integer> list = new ArrayList<>();
            list.add(1);
            List<Integer> last = ans.get(ans.size() - 1);
            // 中间元素 = 上一行相邻两数之和
            for (int j = 1; j < i - 1; j++) {
                list.add(last.get(j - 1) + last.get(j));
            }
            list.add(1);
            ans.add(list);
        }
        return ans;
    }
}
