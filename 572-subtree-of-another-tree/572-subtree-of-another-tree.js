/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
function isSame(originTree,compareTree){
    if(originTree===null&&compareTree===null){
        return true
    }
    if(originTree&&compareTree){
        if(originTree.val!==compareTree.val){
            return false
        }
        return isSame(originTree.left,compareTree.left)&&isSame(originTree.right,compareTree.right)
    }
    return false
}

var isSubtree = function(root, subRoot) {
    if(isSame(root,subRoot)){
        return true
    }
    if(root&&(root.left||root.right)){
        return isSubtree(root.left,subRoot)||isSubtree(root.right,subRoot)
    }
    return false
};