/**
 * [160. 相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/)
 */
class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        if (headA == null || headB == null) return null;
        // 两个指针走完自己的链表后跳到对方的头，走的总长度相同，相遇点即交点
        ListNode p = headA;
        ListNode q = headB;
        while (p != q) {
            p = p == null ? headB : p.next;
            q = q == null ? headA : q.next;
        }
        return p;
    }
}
