/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
function findNode(node,nodes){
    nodes[node.val-1]=node;
    for(const neighbor of node.neighbors){
        if(!nodes[neighbor.val-1]){
            findNode(neighbor,nodes);
        }
    }
    return;
}
var cloneGraph = function(node) {
    if(!node){
        return null;
    }
    let nodes=[];
    findNode(node,nodes);
    let newNodes=nodes.map(el=>new Node(el.val));
    for(let i=0;i<nodes.length;i++){
        for(const neighbor of nodes[i].neighbors){
            newNodes[i].neighbors.push(newNodes[neighbor.val-1]);
        }
    }
    return newNodes[0];
};