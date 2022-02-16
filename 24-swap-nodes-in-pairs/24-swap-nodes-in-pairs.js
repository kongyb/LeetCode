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
var swapPairs = function(head) {
    if(!head||!head.next){
        return head;
    }
    let p1=head;
    let p2=p1.next;
    p1.next=p2.next;
    p2.next=p1;
    head=p2;
    while(p1.next&&p1.next.next){
        let prev=p1;
        p1=p1.next;
        p2=p1.next;
        p1.next=p2.next;
        p2.next=p1;
        prev.next=p2;
    }
    return head;
};