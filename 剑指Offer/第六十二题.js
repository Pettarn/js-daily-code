function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let node = new TreeNode(5)
node.left = new TreeNode(4)
node.right = new TreeNode(6)

function KthNode (pRoot, k) {
    let stack = []
    let result = []
    let root = pRoot
    let p = root
    while (p || stack.length) {
        while (p) {
            stack.push(p)
            p = p.left
        }
        p = stack[stack.length-1]
        result.push(p)
        stack.pop()
        p = p.right
    }

    if (k > result.length) {
        return
    }
    return result[k-1]
}

console.log(KthNode(node, 3))