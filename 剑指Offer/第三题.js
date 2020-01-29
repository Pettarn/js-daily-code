/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    
    function ListNode (x) {
        this.val = x
        this.next = null
    }
    let result = new ListNode(null)
    result.next = new ListNode(null)
    while (head !== null && head.val !== undefined) {
        result.next.val = head.val
        let mid = new ListNode(null)
        mid.next = result.next
        result.next = mid
        head = head.next
    }
    // null > 1
    result = result.next
    let arr = []
    while (result) {
        // console.log(result.val)
        if (result.val !== null) {
            arr.push(result.val)
        }
        result = result.next
    }
    return arr
}

function ListNode (x) {
    this.val = x
    this.next = null
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
console.log(printListFromTailToHead(head))
