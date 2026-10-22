/**
 * [148. 排序链表](https://leetcode.cn/problems/sort-list/)
 */
class Solution {
    public ListNode sortList(ListNode head) {
        // 归并排序：快慢指针找中点断开，递归排序两段后合并
        if (head == null || head.next == null) return head;
        ListNode p = head;
        ListNode q = head.next;
        while (q != null && q.next != null) {
            p = p.next;
            q = q.next.next;
        }
        ListNode second = p.next;
        p.next = null;
        return merge(sortList(head), sortList(second));
    }

    public ListNode merge(ListNode l1, ListNode l2) {
        ListNode head = new ListNode();
        ListNode p = l1;
        ListNode q = l2;
        ListNode tail = head;
        while (p != null && q != null) {
            if (p.val < q.val) {
                tail.next = p;
                p = p.next;
            } else {
                tail.next = q;
                q = q.next;
            }
            tail = tail.next;
        }
        tail.next = p == null ? q : p;
        return head.next;
    }
}
