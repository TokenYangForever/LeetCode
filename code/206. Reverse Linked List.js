/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head==null) return null;  
    if(head.next==null) return head;
    var h = head
    var hnext = head.next
    h.next = null
    var Nnext
    while (hnext!=null) {
        Nnext = hnext.next
        hnext.next = h
        h = hnext
        hnext = Nnext
    }
    return h
};
