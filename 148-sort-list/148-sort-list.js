/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swap(node1,node2){
    let temp=node1.val;
    node1.val=node2.val;
    node2.val=temp;
    return;
}

function heapSort(arr){

}

var sortList = function(head) {
    let arr=[];
    let pointer=head;
    while(pointer!==null){
        arr.push(pointer.val);
        pointer=pointer.next;
    }
    arr.sort((a,b)=>a-b);
    pointer=head;
    for(const num of arr){
        pointer.val=num;
        pointer=pointer.next;
    }
    return head;
    
};