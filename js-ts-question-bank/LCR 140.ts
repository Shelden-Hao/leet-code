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

function trainingPlan(head: ListNode | null, cnt: number): ListNode | null {
    let slow = head, fast = head
    while (cnt--) {
        fast = fast!.next
    }
    while (fast) {
        fast = fast.next
        slow = slow!.next
    }
    return slow
};

export {}
