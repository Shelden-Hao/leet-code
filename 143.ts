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

/**
 * 143. 重排链表
 * https://leetcode.cn/problems/reorder-list/description/
 * @param head 头节点
 * @returns {void}
 */
function reorderList(head: ListNode | null): void {
  if (head === null || head.next === null) return;
  let slow = head;
  let fast = head;
  // slow 找到中心点
  while (fast && fast.next) {
    fast = fast.next.next!;
    slow = slow.next!;
  }
  // 翻转后半段链表
  // pre 需要为 null，否则会增加一个额外的虚拟节点
  let pre = null;
  // 从 slow.next 开始翻转
  let cur = slow.next;
  // 断开前半段链表
  slow.next = null;
  while (cur) {
    const next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  // 合并链表
  let first = head;
  let second = pre;
  // second.next 为最中心节点(奇数)或者最中心的后一个节点(偶数)
  while (second) {
    // 暂存两条链表的后一个节点
    let firstNext = first.next!;
    let secondNext = second.next;
    // 不断移动 first 和 second 串起链表
    first.next = second;
    second.next = firstNext;
    first = firstNext;
    second = secondNext;
  }
}
