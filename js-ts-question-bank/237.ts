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
 Do not return anything, modify it in-place instead.
 */
/**
 * 237. 删除链表中的节点
 * https://leetcode.cn/problems/delete-node-in-a-linked-list/description/
 * @param node 需要删除的节点
 */
function deleteNode(node: ListNode | null): void {
    node!.val = node!.next!.val
    node!.next = node!.next!.next
};
