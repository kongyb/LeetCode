/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder[0] === -1)
        return new TreeNode(-1);
    return makeNode(preorder, inorder);
};

function makeNode(preorder, inorder){
    if (preorder.length === 0)
        return null;
    let headNum = preorder[0];
    let headIndex = inorder.indexOf(headNum);
    let left = makeNode(preorder.slice(1, 1+headIndex), inorder.slice(0,headIndex));
    let right = makeNode(preorder.slice(1+headIndex), inorder.slice(headIndex+1));
    return new TreeNode(headNum, left, right);
}