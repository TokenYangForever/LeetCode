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
var sumOfLeftLeaves = function(root) {
    if (!root) {
        return 0
    }
    var result = 0
    function findLL (node) {
        if (node.left) {
            if (node.left.left || node.left.right) {         
                findLL(node.left)
            } else {
                result += node.left.val
            }
        }
        if (node.right) {
            findLL(node.right)
        }
    }
    findLL(root)
    return result
};
