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
 * 142. 环形链表 II
 * @param head 头节点
 * @description 快慢指针先找到环（快慢指针相遇）
 * ==> 推理的结论：相遇点到入环点的距离刚好等于开始节点到入环点的距离
 */
function detectCycle(head: ListNode | null): ListNode | null {
    let fast = head
    let slow = head
    // 1. 判断是否有环
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow!.next
        if (fast === slow) {
            // 2. 找到入环点
            let pointer :ListNode | null = head
            while (pointer !== slow) {
                pointer = pointer!.next
                slow = slow!.next
            }
            return pointer
        }
    }
    return null
};
