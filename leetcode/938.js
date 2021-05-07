/** 938. 二叉搜索树的范围和
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
// var rangeSumBST = function(root, low, high) {
//     let res = 0
//     const goNext = (node) => {
//         if (node === null) {
//             return
//         }
//         let thisVal = node.val
//         if (thisVal >= low && thisVal <= high) {
//             res += thisVal
//         }
//         goNext(node.right)
//         goNext(node.left)
//     }
//     goNext(root)
//     return res
// };
// 官方
var rangeSumBST = function(root, low, high) {
    const goNext = (node) => {
        if (node === null) {
            return 0
        }
        let thisVal = node.val
        if (thisVal < low) {
            return goNext(node.right)
        }
        if (thisVal > high) {
            return goNext(node.left)
        }
        return node.val + goNext(node.left) + goNext(node.right)
    }
    return  goNext(root)
};

// 输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
// 输出：32