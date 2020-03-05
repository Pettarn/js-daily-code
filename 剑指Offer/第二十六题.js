function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

let node = new TreeNode(5)
node.right = new TreeNode(7)
node.left = new TreeNode(3)

function Convert(pRootOfTree)
{
    let root = pRootOfTree
    if (!root) {
        return root
    }
    

    function core (node) {
        if (node.left !== null) {
            core(node.left)
        }
        if (node.right !== null) {
            core(node.right)
        }
        // 找left
        let left = node.left
        if (left) {
            while (left.right) {
                left = left.right
            }
            node.left = left
            left.right = node
        }
        // 找right
        let right = node.right
        if (right) {
            while (right.left) {
                right = right.left
            }
            node.right = right
            right.left = node
        }

    }

    core(root)

    while(root.left) {
        root = root.left
    }
    return root
}

Convert(node)


