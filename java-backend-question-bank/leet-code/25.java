/**
 * [25. K 个一组翻转链表](https://leetcode.cn/problems/reverse-nodes-in-k-group/)
 */
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        // 每 k 个节点做一次头插反转，不足 k 个则保持原样
        ListNode h = new ListNode(0, head);
        ListNode pre = h;
        ListNode nextKHead = h.next;
        while (nextKHead != null) {
            int i = 0;
            while (i < k) {
                i++;
                nextKHead = nextKHead.next;
                if (nextKHead == null) break;
            }
            if (i < k) break;
            ListNode t = pre.next;
            reverseK(pre, nextKHead);
            pre = t;
        }
        return h.next;
    }

    private void reverseK(ListNode pre, ListNode nextKHead) {
        ListNode p = pre.next.next;
        pre.next.next = nextKHead;
        while (p != nextKHead) {
            ListNode next = p.next;
            p.next = pre.next;
            pre.next = p;
            p = next;
        }
    }
}
