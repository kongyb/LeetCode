/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if(list1===null){
        return list2
    }
    if(list2===null){
        return list1;
    }
    let result=new ListNode();
    let resultPointer=result;
    while(list1!==null&&list2!==null){
        if(list1.val>list2.val){
            resultPointer.val=list2.val;
            list2=list2.next;
        }
        else{
            resultPointer.val=list1.val;
            list1=list1.next;
        }
        resultPointer.next=new ListNode();
        resultPointer=resultPointer.next;
    }
    if(!list1){
        resultPointer.val=list2.val;
        resultPointer.next=list2.next;
    }
    else{
        resultPointer.val=list1.val;
        resultPointer.next=list1.next;
    }
    return result;
};