/**
 * [142. 环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/)
 */
class Solution {
    public ListNode detectCycle(ListNode head) {
        // 快慢指针相遇后，一个指针回表头，再同速前进，相遇处即入环点
        ListNode p = head;
        ListNode q = head;
        while (q != null && q.next != null) {
            p = p.next;
            q = q.next.next;
            if (p == q) {
                ListNode t = head;
                while (t != p) {
                    t = t.next;
                    p = p.next;
                }
                return t;
            }
        }
        return null;
    }
}
