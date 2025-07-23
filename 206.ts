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
 * 206. 反转链表 - 方法一（利用栈）
 * https://leetcode.cn/problems/reverse-linked-list/description/
 * @param head 头节点
 * @description
 * 反转一个链表 可以看做是反转一个数组
 * 而反转数组可以使用栈的特性 先进后出 反转
 */
function reverseList(head: ListNode | null): ListNode | null {
    // 判断不必反转的情况边界
    if (head === null) return null
    if (head.next === null) return head

    // 将链表变为栈
    const stack: ListNode[] = []
    let current: ListNode | null = head
    while (current) {
        stack.push(current)
        current = current.next
    }
    // 出栈构建新链表
    const newHead: ListNode = stack.pop()!;
    let newCurrent = newHead
    while (stack.length) {
        newCurrent.next = stack.pop()!
        newCurrent = newCurrent.next
    }
    // 切记！！！最后一个节点指向null 要不然就会重新指向前面的节点 造成死循环
    newCurrent.next = null
    return newHead
};

export  {}
