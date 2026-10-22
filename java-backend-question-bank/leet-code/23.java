/**
 * [23. 合并 K 个升序链表](https://leetcode.cn/problems/merge-k-sorted-lists/)
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        // 分治：把 k 个链表对半拆开，递归合并，避免逐个合并的 O(kn) 开销
        int n = lists.length;
        if (n == 0) return null;
        else if (n == 1) {
            return lists[0];
        } else if (n == 2) {
            return merge(lists[0], lists[1]);
        } else {
            ListNode[] lists1 = new ListNode[(n + 1) / 2];
            ListNode[] lists2 = new ListNode[n / 2];
            for (int i = 0; i < n; i++) {
                if (i < lists1.length) {
                    lists1[i] = lists[i];
                } else {
                    lists2[i - lists1.length] = lists[i];
                }
            }
            return merge(mergeKLists(lists1), mergeKLists(lists2));
        }
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
