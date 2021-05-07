/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 897. 递增顺序搜索树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let res = []
    let newNode = new TreeNode(-1)
    let currNode = newNode
    const goNext = (node) => {
        console.log(node, res, '===')
        if (node === null) {
            return
        }
        goNext(node.left)
        res.push(node.val)
        goNext(node.right)
    }
    goNext(root)
    res.map(item => {
        currNode.right = new TreeNode(item)
        currNode = currNode.right
    })
    return newNode.right
};