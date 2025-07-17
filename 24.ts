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

function swapPairs(head: ListNode | null): ListNode | null {
    // 创建虚拟节点
    const dummy = new ListNode(0)
    dummy.next = head

    // 创建 current 用户操作原来的节点
    let current = dummy
    while (current.next && current.next.next) {
        const node1= current.next
        const node2 = current.next.next

        // 交换
        current.next = node2
        node1.next = node2.next
        node2.next = node1

        // current 继续寻找下一组交换
        current = node1
    }
    return dummy.next;
};