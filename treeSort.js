/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    // 节点构造方法
    function TreeNode (val) {
        this.val = val
        this.left = this.right = null
    }

    // 构造搜索树
    function position (node, val) {
        // 返回大于还是小于，直到再往下是null
        if (val <= node.val) {
            if (node.left !== null)
                position(node.left, val)
            else 
                node.left = new TreeNode(val)
        } else if (val > node.val) {
            if (node.right !== null) 
                position(node.right, val)
            else 
                node.right = new TreeNode(val)
        }
    }

    // 查找某节点的子树的最左下角的叶子
    function findDeepLeft (node) {
        if (node.left === null) {
            return node
        } else {
            findDeepLeft(node.left)
        }
    }
    
    // 中序遍历
    function search (node, arr) {
        if (node !== null) {
            search(node.left, arr)
            arr.push(node.val)
            search(node.right, arr)
        }
        return arr
    }

    let len = nums.length
    if (len === 0) {
        return []
    }

    let root = new TreeNode(nums[0])

    // 转化成搜索树
    for(let i = 1; i < len; i++) {
        position(root, nums[i])
    }

    let arr = []
    
    arr = search(root, arr)

    return arr
};