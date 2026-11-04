/**
 * [141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/)
 */
class Solution {
    public boolean hasCycle(ListNode head) {
        // 快慢指针，有环一定会在环内相遇
        ListNode p = head;
        ListNode q = head;
        while (q != null && q.next != null) {
            p = p.next;
            q = q.next.next;
            if (p == q) return true;
        }
        return false;
    }
}
