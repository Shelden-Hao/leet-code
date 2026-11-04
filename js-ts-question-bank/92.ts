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
 * 92. 反转链表 II
 * @param head 头节点
 * @param left 需要反转组的左节点的位置（从1开始）
 * @param right 需要反转组的右节点的位置（从1开始）
 */
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const dummy: ListNode | null = new ListNode(0, head)
    // 使用 p 来保存所有需要反转节点中第一个节点的前一个，用于连接链表
    let p = dummy
    for (let i = 0; i < left - 1; i++) {
        p = p.next!
    }
    // p 的下一个开始就是普通反转链表的操作
    let pre: ListNode | null = null
    let cur = p.next
    let newHead: ListNode | null = null
    for (let i = 0; i < right - left + 1; i++) {
        newHead = cur!.next
        cur!.next = pre
        pre = cur
        cur = newHead
    }
    // 此刻中间部分已经反转完成 cur 为 right 的下一个节点
    p.next!.next = cur
    p.next = pre

    return dummy.next
};

export {}
