function ListNode(x){
    this.val = x;
    this.next = null;
}

let node1 = new ListNode(1)
node1.next = new ListNode(3)
let node2 = new ListNode(2)
node2.next = new ListNode(4)

function Merge(pHead1, pHead2)
{
    if (!pHead1) {
        return pHead2
    } else if (!pHead2) {
        return pHead1
    } else {
        let result = null
        if (pHead1.val <= pHead2.val) {
            result = pHead1
            result.next = Merge(pHead1.next, pHead2)
        } else {
            result = pHead2
            result.next = Merge(pHead2.next, pHead1)
        }
        return result
    }
}

console.log(Merge(node1, node2))