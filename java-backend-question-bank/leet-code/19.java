/**
 * [19. 删除链表的倒数第 N 个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        // 哑结点 + 快慢指针，快指针先走 n 步，慢指针最终停在待删节点的前一个
        ListNode h = new ListNode();
        h.next = head;
        ListNode p = h;
        ListNode q = h;
        for (int i = 0; i < n; i++) {
            q = q.next;
        }
        while (q.next != null) {
            p = p.next;
            q = q.next;
        }
        p.next = p.next.next;
        return h.next;
    }
}
