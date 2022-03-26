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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root){
        return []
    }
    let result=[]
    let floor=[root]
    while(floor.length>0){
        result.push(floor[floor.length-1].val)
        let temp=[]
        floor.forEach((node)=>{
            if(node.left){
                temp.push(node.left)
            }
            if(node.right){
                temp.push(node.right)
            }
        })
        floor=temp
    }
    return result
};