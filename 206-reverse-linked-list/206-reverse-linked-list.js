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
var reverseList = function(head) {
    let arr=[];
    let pointer=head;
    while(pointer!==null){
        arr.push(pointer);
        pointer=pointer.next;
    }
    let l=0;
    let r=arr.length-1;
    while(l<r){
        let temp=arr[l].val;
        arr[l].val=arr[r].val;
        arr[r].val=temp;
        l++;
        r--;
    }
    return head;
};