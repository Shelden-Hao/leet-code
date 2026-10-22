/**
 * [56. 合并区间](https://leetcode.cn/problems/merge-intervals/)
 */
class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (int[] a, int[] b) -> (a[0] - b[0]));
        List<int[]> list = new ArrayList<>();
        list.add(intervals[0]);
        for (int i = 1; i < intervals.length; i++) {
            int lastRight = list.get(list.size() - 1)[1];
            int curLeft = intervals[i][0];
            int curRight = intervals[i][1];
            if (lastRight < curLeft) {
                list.add(new int[]{curLeft, curRight});
            } else {
                int lastLeft = list.get(list.size() - 1)[0];
                list.set(list.size() - 1, new int[]{lastLeft, Math.max(lastRight, curRight)});
            }
        }
        return list.toArray(new int[list.size()][]);
    }
}