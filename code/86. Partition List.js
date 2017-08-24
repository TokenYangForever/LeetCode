/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if (!head || !head.next) {
        return head
    }
    var sHead = new ListNode(0)
    var bHead = new ListNode(0)
    var snext = sHead
    var bnext = bHead
    var node = head
    while ( node != null) {
        var nnext = node.next
        if (node.val < x) {
            snext.next = node
            snext = snext.next
        } else {
            bnext.next = node
            bnext = bnext.next
        }
        node = nnext
    }
    bnext.next = null
    snext.next = bHead.next
    return sHead.next
};
