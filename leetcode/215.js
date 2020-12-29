/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    // 0,  k -1
    let left = 0
    let right = nums.length -1
    
};
// var findKthLargest = function(nums, k) {
//     let qk = (arr) => {
//         if (!arr.length) {
//             return arr
//         }
//         let left = []
//         let right = []
//         let curr = arr.shift()
//         for(let i = 0; i<arr.length; i++) {
//             if(arr[i] > curr) {
//                 left.push(arr[i])
//             } else {
//                 right.push(arr[i])
//             }
//         }
//         return qk(left).concat(curr, qk(right))
//     }
//     let newArr = qk(nums)
//     return newArr[k-1]
// };


// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4