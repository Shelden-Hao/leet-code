/**
 * [108. 将有序数组转换为二叉搜索树](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)
 */
class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        return build(nums, 0, nums.length - 1);
    }

    private TreeNode build(int[] nums, int left, int right) {
        // 每次取中点作为根，天然保证左右高度差不超过 1
        if (left > right) return null;
        int mid = left + (right - left >> 1);
        TreeNode lchild = build(nums, left, mid - 1);
        TreeNode rchild = build(nums, mid + 1, right);
        return new TreeNode(nums[mid], lchild, rchild);
    }
}
