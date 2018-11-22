/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 二叉搜索树：若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值； 若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值
var lowestCommonAncestor = function(root, p, q) {
    if ((root.val - p.val) * (q.val - root.val) >= 0) {
        return root
    }
    return lowestCommonAncestor(root.val > q.val ? root.left : root.right, p, q)
};
