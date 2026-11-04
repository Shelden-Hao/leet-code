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
 * 160. 相交链表 [https://leetcode.cn/problems/intersection-of-two-linked-lists/]
 * @param headA 第一个链表头节点
 * @param headB 第二个链表头节点
 * @description 双指针，分别从头开始遍历，每次同时next，但是都遍历到自身最后，然后连接下一个链表的头部，都走相同的长度。
 * 重点；如果有相遇，那么相遇后续链表一定相同，所以next同时向前即可。
 * 其他方法：
 * 1. 两层for循环，依次对比找到相同的节点，时间复杂度 O(n²) 。
 * 2. 将一个链表节点放入哈希表中，在另一个链表节点中查找在该哈希表中是否存在相同节点。时间复杂度 O(m+n)，空间复杂度 O(m) 。
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (headA === null || headB === null) return null

    // 使用临时指针存储，否则会导致链表的无限循环，后续保证只连接一次
    let pA: ListNode | null = headA
    let pB: ListNode | null = headB

    // pA和pB未相遇
    while (pA !== pB) {
        pA = pA ? pA.next : headB
        pB = pB ? pB.next : headA
    }

    // pA和pB已经相遇 或者都为null
    return pA
};

export {}
