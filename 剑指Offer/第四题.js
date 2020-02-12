/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function reConstructBinaryTree(pre, vin)
{
    function TreeNode (x) {
        this.val = x
        this.left = null
        this.right = null
    }

    let result = new TreeNode(null)

    function core (res, pre, vin) {
        let root = pre.length !== 0 ? pre[0] : undefined
        if (root === undefined) return 
        res.val = root
        let left = []
        let right = []
        let index
        // 分割中序遍历
        for (let i = 0; i < vin.length; i++) {
            if (vin[i] !== root) {
                left.push(vin[i])
            } else {
                index = i
                break
            }
        }

        if (left.length !== 0) {
            res.left = new TreeNode(null)
            core(res.left, pre.slice(1, left.length + 1), left)
        }
        for (let i = index + 1; i < vin.length; i++) {
            right.push(vin[i])
        }
        if (right.length !== 0) {
            res.right = new TreeNode(null)
            core(res.right, pre.slice(left.length + 1), right)
        }
    }
    core(result, pre, vin)

    return result
}

// let pre = [1, 2]
// let vin = [2, 1]  

let pre = [1,2,4,7,3,5,6,8]
let vin = [4,7,2,1,5,3,8,6]  

let r = reConstructBinaryTree(pre, vin)
console.log(r)