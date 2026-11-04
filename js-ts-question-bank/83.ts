/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 * 83. 删除排序链表中的重复元素
 * @param head 头节点
 * @description 快慢指针 快指针负责遍历 慢指针负责接收不重复节点。
 * 但是要注意：slow最后指向为null，需要和重复节点切断。
 */
function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
       return head
    }
    let slow = head, fast:ListNode | null = head;
    while (fast) {
        if (slow.val !== fast.val) {
            slow = slow.next!
            slow.val = fast.val
        }
        fast = fast.next
    }
    slow.next = null
    return head
};

export {}
