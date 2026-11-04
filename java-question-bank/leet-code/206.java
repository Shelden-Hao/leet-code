/**
 * [206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/)
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        // 头插法：依次把原链表的节点摘下来插到哑结点后面
        ListNode h = new ListNode();
        ListNode p = head;
        while (p != null) {
            ListNode next = p.next;
            p.next = h.next;
            h.next = p;
            p = next;
        }
        return h.next;
    }
}
