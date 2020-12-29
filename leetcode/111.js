/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    let leve = 0
    var nodeDepth = function(node) {
        if(!node) {
            return leve
        }
        if(node.left) {
            nodeDepth(node.left)
        }
        if(node.right) {
            nodeDepth(node.right)
        }
        return ++leve
    }
    return nodeDepth(root)
};