/**
 * https://leetcode-cn.com/problems/sort-list/solution/jssan-chong-jie-fa-di-gui-bu-jie-duan-die-dai-jie-/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if (!head || !head.next) {
        return head
    }

    function ListNode (val) {
        this.val = val
        this.next = null
    }

    let [slow, fast] = [head, head.next]

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    
    let mid = slow.next
    slow.next = null

    let [left, right] = [sortList(head), sortList(mid)]

    let curr = res = new ListNode(null)

    while (left && right) {
        if (left.val < right.val) {
            curr.next = left
            left = left.next
        } else if (left.val >= right.val) {
            curr.next = right
            right = right.next
        }
        curr = curr.next
    }

    curr.next = left ? left : right

    return res.next
};