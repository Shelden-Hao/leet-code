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
 * 25. K 个一组翻转链表
 * https://leetcode.cn/problems/reverse-nodes-in-k-group/description/
 * @param head 头节点
 * @param k k个节点一组
 * @description 相对于翻转链表II来说，多了两步操作：
 * 1. 判断剩余部分是否能够发生翻转
 * 2. 不断更新p的值，用于连接每一组链表
 */
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    // 统计节点个数
    let n = 0
    for (let cur: ListNode | null = head; cur; cur = cur.next) n++

    const dummy: ListNode | null = new ListNode(0, head)
    let p = dummy

    let pre: ListNode | null = null;
    let cur = p.next
    let newHead: ListNode | null = null
    // 保存上一个 p的节点
    let preP: ListNode | null = null
    // 剩余节点个数大于等于 k 就可以循环
    while (n >= k) {
        n -= k
        // 反转当前这组
        for (let i = 0; i < k; i++) {
            newHead = cur!.next
            cur!.next = pre
            pre = cur
            cur = newHead
        }
        // 由于存在多组翻转，所以需要更新p
        // p 此时应该为下一组需要翻转的链表的上一个节点，刚好为之前的 p 的 next
        preP = p.next
        p.next!.next = cur
        p.next = pre
        p = preP!
    }
    return dummy.next
};

export {}
