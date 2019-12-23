/**
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

    if (head === undefined || null) {
        return head
    }

    function ListNode (val) {
        this.val = val
        this.next = null
    }

    function toArr (head) {
        arr.push(head.val)
        if (head.next) {
            toArr(head.next)
        }
    }

    function toList (arr) {
        let minorArr = []
        let newHead = new ListNode(arr[0])
        for (let i = 1; i < arr.length; i++) {
            if (arr[0] < arr[i]) {
                newHead.next = new ListNode(arr[i])
            } else if (arr[0] === )
        }
    }

    let arr = []
    toArr(head)

    



};
