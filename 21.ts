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
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * 21. 合并两个有序链表
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 * @param list1 第一个链表头节点
 * @param list2 第二个链表头节点
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    const dummy = new ListNode()
    let cur = dummy
    // 两个链表同时都有当前节点都有值
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            cur.next = list1
            list1 = list1.next
        } else{
            cur.next = list2
            list2 = list2.next
        }
        cur = cur.next
    }
    // 当有一个链表没走完，直接接上去
    cur.next = list1 !== null ? list1 : list2
    return dummy.next;
};

export {}
