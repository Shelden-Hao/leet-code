/**
 * [24. 两两交换链表中的节点](https://leetcode.cn/problems/swap-nodes-in-pairs/)
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) return head;
        // 哑结点 + 每次处理两个节点：pre -> first -> second -> tail
        ListNode h = new ListNode(0, head);
        ListNode pre = h;
        ListNode first = head;
        while (first != null && first.next != null) {
            ListNode second = first.next;
            ListNode tail = second.next;
            pre.next = second;
            second.next = first;
            first.next = tail;
            pre = first;
            first = tail;
        }
        return h.next;
    }
}
