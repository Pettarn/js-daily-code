function ListNode(x){
    this.val = x;
    this.next = null;
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

function ReverseList(pHead)
{
    let pCur = null
    let pNext = null

    while (pHead) {
        pNext = pHead.next
        pHead.next = pCur
        pCur = pHead
        pHead = pNext
    }

    return pCur
}

console.log(ReverseList(head))

