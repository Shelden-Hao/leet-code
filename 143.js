/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (!head || !head.next) return;
    // 1. 通过快慢指针找到链表的中点
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 反转链表的后半部分
    let pre = null;
    let cur = slow;
    while (cur) {
        let nextNode = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nextNode;
    }
    // 合并链表
    let first = head;
    let second = pre;
    while (second.next) {
        let temp1 = first.next;
        let temp2 = second.next;
        first.next = second;
        second.next = temp1;
        first = temp1;
        second = temp2;
    }
};
