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
var rotateRight = function(head, k) {
    let len=0
    let pointer=head
    while(pointer){
        pointer=pointer.next
        len++
    }
    if(len===0){return head}
    k=k%len
    if(k===0){
        return head
    }
    pointer=head
    for(let i=0;i<len-k-1;i++){
        pointer=pointer.next
    }
    let result=pointer.next
    pointer.next=null
    pointer=result
    while(pointer.next){
        pointer=pointer.next
    }
    pointer.next=head
    return result
};