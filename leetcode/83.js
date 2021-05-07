/** 83. 删除排序链表中的重复元素
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
// var deleteDuplicates = function(head) {
//     let newNode = new ListNode()
//     newNode = head
//     while (head.next !== null) {
//         console.log(head, newNode, '===')
//         console.log(head, newNode)
//         if (head.next.val === newNode.val) {
//             head = head.next.next
//             newNode.next = head
//         } else {
//             newNode.next = head.next
//         }
//          console.log(head, newNode, '===')
//     }
//     return newNode
// };
// var deleteDuplicates = function(head) {
//     let newNode = new ListNode()
//     newNode = head
//     head = head.next
//     while (head !== null) {
//         console.log(head, newNode, head.val !== newNode.val)
//         if (head.val !== newNode.val) {
//             newNode.next = head
//         }
//         head = head.next 
//     }
//     return newNode
// };
var deleteDuplicates = function(head) {
    if (!head) {
        return head
    }
    let newNode = head
    while (head.next !== null) {
        if (head.next.val !== head.val) {
            head = head.next
        } else {
            head.next = head.next.next
        }
    }
    return newNode
};
