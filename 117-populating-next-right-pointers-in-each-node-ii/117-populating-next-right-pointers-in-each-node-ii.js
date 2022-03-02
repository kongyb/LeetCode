/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
function hasChild(root){
    if(root===null){
        return false
    }
    if(root.left||root.right){
        return true
    }
    return false
}

function childNodes(root){
    return [root.left,root.right].filter(el=>el!==null)
}

var connect = function(root) {
    if(hasChild(root)){
        let children=childNodes(root)
        if(children.length===2){
            children[0].next=children[1]
        }
        if(root.next){
            let nextNode=root.next
            while(nextNode&&!hasChild(nextNode)){
                nextNode=nextNode.next
            }
            if(nextNode!==null){
                let nextChild=childNodes(nextNode)
                children[children.length-1].next=nextChild[0]
            }
        }
        for(let i=children.length-1;i>=0;i--){
            connect(children[i]);
        }
    }
    return root
};