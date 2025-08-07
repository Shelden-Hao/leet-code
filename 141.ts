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
 *  141. 环形链表 - 方法一
 * @param head 头节点
 * @description
 * 对头节点扩展一个 flag 标识属性 表示当前节点是否已经被遍历过，
 * 重复遍历即形成环
 */
// function hasCycle(head: ListNode | null): boolean {
//     let dummy= head as ListNode & { flag?: boolean }
//     while (dummy) {
//         if (dummy.flag) {
//             return true
//         } else {
//             dummy.flag = true
//             dummy = dummy.next as ListNode & { flag?: boolean }
//         }
//     }
//     return false
// };

/**
 *  141. 环形链表 - 方法二
 * @param head 头节点
 * @description
 * 快慢指针 一个每次走两步 一个每次走一步，
 * 如果成环，他们总有相遇的时候
 */
function hasCycle(head: ListNode | null): boolean {
    let fast = head
    let slow = head

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow!.next
        if (fast === slow) {
            return true
        }
    }

    return false;
};

export {}
