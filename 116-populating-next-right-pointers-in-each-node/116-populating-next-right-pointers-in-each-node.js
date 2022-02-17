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
var connect = function(root) {
    if(root===null) return root;
    let nodes=[root.left,root.right].filter(el=>el!==null);
    while(nodes.length>0){
        for(let i=0;i<nodes.length-1;i++){
            nodes[i].next=nodes[i+1];
        }
        nodes=nodes.map(el=>[el.left,el.right]).flat().filter(el=>el!==null);
    }
    return root;
};