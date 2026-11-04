/**
 * [138. 随机链表的复制](https://leetcode.cn/problems/copy-list-with-random-pointer/)
 */
class Solution {
    public Node copyRandomList(Node head) {
        // 哈希表建立「原节点 -> 新节点」的映射，再串起 next 和 random
        Map<Node, Node> map = new HashMap<>();
        Node p = head;
        while (p != null) {
            map.put(p, new Node(p.val));
            p = p.next;
        }
        p = head;
        while (p != null) {
            map.get(p).next = map.get(p.next);
            map.get(p).random = map.get(p.random);
            p = p.next;
        }
        return map.get(head);
    }
}
