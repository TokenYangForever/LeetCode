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
var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    function getDepth (node) {
        let deep = 1
        let deepleft = 0
        let deepright = 0
        if (node.left) {
            deepleft = getDepth(node.left)
        } 
        if (node.right) {
            deepright = getDepth(node.right)
        }
        return deep + Math.max(deepleft, deepright)
    }
    return getDepth(root)
};
