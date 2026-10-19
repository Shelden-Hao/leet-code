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
 * 148. 排序链表
 * https://leetcode.cn/problems/sort-list/description/
 * @param head 头节点
 * @description
 * 时间复杂度：O(n log n)，分治递归深度 log n，每次合并 O(n)。
 * 空间复杂度：递归栈 O(log n)。
 */
function sortList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) return head
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;
    let prev: ListNode | null = null;
    // 找中点（快慢指针）
    // 每次使快指针走二步，慢指针走一步，当快指针fast.next为null(链表奇数个节点) / fast为null(链表偶数个节点)
    // 此时prev刚好为两条链表分割处(第一条末尾)，偶数恰好等长分割，奇数则该条(第一条)是短的一条
    while (fast && fast.next) {
        prev = slow
        slow = slow!.next
        fast = fast.next.next
    }
    // 断开链表
    prev!.next = null

    // 递归分割左右链表
    const l1 = sortList(head)
    const l2 = sortList(slow)

    // 排序两个链表并合并
    return merge(l1, l2)
};

function merge(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummy = new ListNode(0)
    let cur = dummy
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1
            l1 = l1.next!
        } else {
            cur.next = l2
            l2 = l2.next!
        }
        cur = cur.next
    }
    cur.next = l1 || l2
    return dummy.next!
}

export {}
