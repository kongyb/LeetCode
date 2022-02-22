/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let pointer=head;
    let change1,change2;
    let len=1;
    if(k===1){
        change1=head;
        change2=head;
    }
    while(pointer.next!==null){
        pointer=pointer.next;
        len++;
        if(change2){
            change2=change2.next;
        }
        if(len===k){
            change1=pointer;
            change2=head;
        }
    }
    if(change1!==change2){
        let temp=change1.val;
        change1.val=change2.val;
        change2.val=temp;
    }
    return head;
};