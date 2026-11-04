/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (!lists.length) return null;
    return mergeHelper(lists, 0, lists.length - 1);
};
const mergeHelper = (lists, left, right) => {
    if (left === right) return lists[left];
    let mid = Math.floor((left + right) / 2);
    let l1 = mergeHelper(lists, left, mid);
    let l2 = mergeHelper(lists, mid + 1, right);
    return mergeTwoLists(l1, l2)
}
const mergeTwoLists = (l1, l2) => {
    let dummy = new ListNode(0);
    let current = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;
    return dummy.next;
}
