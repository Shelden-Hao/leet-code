/**
 * [662. 二叉树最大宽度](https://leetcode.cn/problems/maximum-width-of-binary-tree/)
 * 层序 BFS 给节点按完全二叉树编号，每层宽度 = 最右编号 - 最左编号 + 1；每层减基准值防止溢出
 */
class Solution {
    public int widthOfBinaryTree(TreeNode root) {
        if (root == null) return 0;
        long ans = 1;
        ArrayDeque<Entry> q = new ArrayDeque<>();
        q.offer(new Entry(root, 0));
        while (!q.isEmpty()) {
            int size = q.size();
            long base = q.peekFirst().idx;
            long left = 0, right = 0;
            for (int i = 0; i < size; i++) {
                Entry e = q.poll();
                long idx = e.idx - base;
                if (i == 0) left = idx;
                right = idx;
                if (e.node.left != null) q.offer(new Entry(e.node.left, idx * 2));
                if (e.node.right != null) q.offer(new Entry(e.node.right, idx * 2 + 1));
            }
            ans = Math.max(ans, right - left + 1);
        }
        return (int) ans;
    }

    private static class Entry {
        TreeNode node;
        long idx;

        Entry(TreeNode node, long idx) {
            this.node = node;
            this.idx = idx;
        }
    }
}
