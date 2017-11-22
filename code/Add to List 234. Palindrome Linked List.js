/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let str = []
    let count = 0
    if (!head) {
        return true
    }
    while (head) {
        count++
        str.push(head.val)
        head = head.next
    }
    for (let i = 0; i < count/2; i++) {
        if (str[i] !== str[count - i - 1]) {
            return false
        }
    }
    return true
};
