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
// function reverseList(head: ListNode | null): ListNode | null {
//     // 判断不必反转的情况边界
//     if (head === null) return null
//     if (head.next === null) return head
//
//     // 将链表变为栈
//     const stack: ListNode[] = []
//     let current: ListNode | null = head
//     while (current) {
//         stack.push(current)
//         current = current.next
//     }
//     // 出栈构建新链表
//     const newHead: ListNode = stack.pop()!;
//     let newCurrent = newHead
//     while (stack.length) {
//         newCurrent.next = stack.pop()!
//         newCurrent = newCurrent.next
//     }
//     // 切记！！！最后一个节点指向null 要不然就会重新指向前面的节点 造成死循环
//     newCurrent.next = null
//     return newHead
// };

/**
 * 206. 反转链表 - 方法二（循环）
 * https://leetcode.cn/problems/reverse-linked-list/description/
 * @param head 头节点
 * @description 依次遍历 不断移动节点的指向
 */
// function reverseList(head: ListNode | null): ListNode | null {
//     // 判断不必反转的情况边界
//     if (head === null) return null
//     if (head.next === null) return head
//
//     let newHead: ListNode | null = null
//     while (head) {
//         /*
//             1. current 指向下一个节点 为了保留下一个节点的引用不被销毁
//             2. 改变 head 的指向为 newHead 对于第一个节点来说就是指向了null
//             3. newHead 移动到 head 节点 为了让下一轮操作 head 指向 current 的前一个节点
//             4. 让 head 移动到下一个节点
//          */
//         let current: ListNode | null = head.next
//         head.next = newHead
//         newHead = head
//         head = current
//     }
//
//     return newHead;
// };

/**
 * 206. 反转链表 - 方法三（递归）
 * https://leetcode.cn/problems/reverse-linked-list/description/
 * @param head 头节点
 * @description 递归移动节点
 */
function reverseList(head: ListNode | null): ListNode | null {
    // 判断不必反转的情况边界
    if (head === null) return null
    if (head.next === null) return head

    const newHead = reverseList(head.next ?? null)
    // 递归到这里开始执行节点指向的操作：
    // 最后的迭代为null无以下操作
    // 第一次执行以下操作的时候 下面的 head为 倒数第二个节点 上面的 head 是倒数第三个节点
    // 上面返回的 newHead 是新的头节点 而下面
    head.next.next = head
    head.next = null

    // console.log(newHead);
    // 每次的 newHead 指向的都是 最后一个节点
    // 因为传递的 head.next 为空的时候 直接给 head返回 也就是现在的 newHead
    return newHead
};

const node1 = new ListNode(1)
node1.next = new ListNode(2)
node1.next.next = new ListNode(3)

const newHead1 = reverseList(node1)

let current = newHead1

const values:number[] = []

while (current) {
    values.push(current.val)
    current = current.next
}
console.log(values.join('->'));


export  {};
