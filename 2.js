/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0); // 创建一个虚拟头节点，方便处理返回链表
    let current = dummyHead;  // 当前节点指针
    let carry = 0;  // 进位

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;  // 初始化当前的和为进位

        if (l1 !== null) {
            sum += l1.val;  // 如果 l1 有节点，加入它的值
            l1 = l1.next;  // 移动 l1 到下一个节点
        }

        if (l2 !== null) {
            sum += l2.val;  // 如果 l2 有节点，加入它的值
            l2 = l2.next;  // 移动 l2 到下一个节点
        }

        carry = Math.floor(sum / 10);  // 更新进位
        current.next = new ListNode(sum % 10);  // 创建新的节点，保存当前位的结果
        current = current.next;  // 移动 current 指针
    }

    return dummyHead.next;  // 返回虚拟头节点的 next，即为结果链表的头节点
}
