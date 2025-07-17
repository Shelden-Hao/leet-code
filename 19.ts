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
 * 删除链表的倒数第N个节点
 * @param head
 * @param n
 */
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // 虚拟节点 便于操作第一个节点 很多情况下可以简化我们的操作过程
    const dummy = new ListNode(0)
    dummy.next = head

    let fast = dummy
    let slow = dummy
    // 快指针先走N+1步 这样最后：快指针刚好到null 慢指针的下一个刚好为需要删掉的节点
    // 示例 ：慢指针 -> 需要删掉的指针 -> 尾指针 -> 快指针(null)
    for (let i = 0; i <= n; i++) {
        fast = fast.next!
    }
    // 同时移动 直到快指针为null
    while (fast) {
        fast = fast.next!
        slow = slow.next!
    }
    // 重新连接链表 删掉节点
    slow.next = slow.next?.next!
    return dummy.next;
};