/**
 * [234. 回文链表](https://leetcode.cn/problems/palindrome-linked-list/)
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        // 快慢指针找中点 + 反转后半段 + 逐个比较，最后再把后半段还原
        ListNode slow = head;
        ListNode fast = head;
        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        ListNode second = reverse(slow.next);
        ListNode p = head;
        ListNode q = second;
        boolean flag = true;
        while (q != null) {
            if (p.val != q.val) {
                flag = false;
                break;
            }
            p = p.next;
            q = q.next;
        }
        slow.next = reverse(second);
        return flag;
    }

    private ListNode reverse(ListNode head) {
        ListNode pre = null;
        while (head != null) {
            ListNode next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
    }
}
