/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function check (root1, root2) {
    if (!root2) {
        return true
    } 
    if (!root1) {
        return false
    } 
    if (root1.val === root2.val) {
        return check(root1.left, root2.left) && check(root1.right, root2.right)
    } else {
        return false
    }
}
function HasSubtree(pRoot1, pRoot2)
{ 
    if (pRoot1 === null) {
        return false
    }
    if (pRoot2 === null) {
        return false
    }

    return check(pRoot1, pRoot2) 
    || HasSubtree(pRoot1.left, pRoot2)
    || HasSubtree(pRoot1.right, pRoot2)
}