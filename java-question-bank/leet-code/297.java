/**
 * [297. 二叉树的序列化与反序列化](https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/)
 * 层序 BFS 序列化（null 记为 #），反序列化按同样层序把节点挂回父节点
 */
class Codec {
    public String serialize(TreeNode root) {
        if (root == null) return "";
        StringBuilder sb = new StringBuilder();
        // 层序序列化需要把空孩子入队占位，ArrayDeque 不接受 null，必须用 LinkedList
        Queue<TreeNode> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            TreeNode node = q.poll();
            if (node == null) {
                sb.append("#,");
            } else {
                sb.append(node.val).append(",");
                q.offer(node.left);
                q.offer(node.right);
            }
        }
        return sb.toString();
    }

    public TreeNode deserialize(String data) {
        if (data.isEmpty()) return null;
        String[] a = data.split(",");
        TreeNode root = new TreeNode(Integer.parseInt(a[0]));
        Queue<TreeNode> q = new ArrayDeque<>();
        q.offer(root);
        int i = 1;
        while (!q.isEmpty() && i < a.length) {
            TreeNode node = q.poll();
            if (!a[i].equals("#")) {
                node.left = new TreeNode(Integer.parseInt(a[i]));
                q.offer(node.left);
            }
            i++;
            if (i < a.length && !a[i].equals("#")) {
                node.right = new TreeNode(Integer.parseInt(a[i]));
                q.offer(node.right);
            }
            i++;
        }
        return root;
    }
}
