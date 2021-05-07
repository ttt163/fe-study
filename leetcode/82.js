/** 82. 删除排序链表中的重复元素 II
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
// 未解决？？
// var deleteDuplicates = function(head) {
//     if (!head) {
//         return head
//     }
//     let prevList = new ListNode()
//     prevList.val = 0
//     prevList.next = head
//     let currList = prevList.next
//     let nextList = currList.next
//     while (nextList !== null) {
//         console.log(currList.val, nextList.val, '====')
//         if (currList.val !== nextList.val) {
//             prevList.next = nextList
//             currList.next = nextList.next
//             // prevList.next = currList
//             currList = nextList
//         }
//         nextList = nextList.next
//     }
//     console.log(head, prevList, currList, nextList)
//     return head
// };

// 已解决
var deleteDuplicates = function(head) {
    if (!head) {
        return head
    }
    let prevList = new ListNode()
    prevList.val = 0
    prevList.next = head
    let p = prevList
    let tempVal
    while (p.next !== null) {
        let curr = p.next
        let next = curr.next
        if (next!== null && curr.val === next.val) {
            p.next = next.next
            tempVal = curr.val
        } else {
            if (curr.val === tempVal) {
                p.next = curr.next
            } else {
                p = curr
            }
        }
    }
    return prevList.next
};
// 输入：head = [1,2,3,3,4,4,5]
// 输出：[1,2,5]