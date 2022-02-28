/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let prev=new ListNode(101,head);
    let pointer1=prev;
    let pointer2=head;
    while(pointer2!==null&&pointer2.next!==null){
        if(pointer2.val===pointer2.next.val){
            while(pointer2.next!==null&&pointer2.val===pointer2.next.val){
                pointer2=pointer2.next;
            }
            pointer1.next=pointer2.next;
            pointer2=pointer1.next;
        }
        else{
            pointer1=pointer1.next;
            pointer2=pointer2.next;            
        }
    }
    return prev.next;
};