/**
 * [21. 合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)
 */
class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        ListNode head = new ListNode();
        ListNode pre = head;
        ListNode p = list1;
        ListNode q = list2;
        while (p != null && q != null) {
            if (p.val < q.val) {
                pre.next = p;
                p = p.next;
            } else {
                pre.next = q;
                q = q.next;
            }
            pre = pre.next;
        }
        pre.next = p == null ? q : p;
        return head.next;
    }
}
