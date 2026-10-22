/**
 * [2. 两数相加](https://leetcode.cn/problems/add-two-numbers/)
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int add = 0;
        ListNode p = l1;
        ListNode q = l2;
        ListNode head = new ListNode();
        ListNode tail = head;
        while (p != null || q != null || add != 0) {
            int cur = add + (p == null ? 0 : p.val) + (q == null ? 0 : q.val);
            add = cur / 10;
            tail.next = new ListNode(cur % 10);
            tail = tail.next;
            p = p == null ? null : p.next;
            q = q == null ? null : q.next;
        }
        return head.next;
    }
}
