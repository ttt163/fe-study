/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const setlectK = (arr, k, start, end) => {
        console.log(arr, start, end, k)
        let p = arr[end]
        let i = start
        let j = start
        while (j < end) {
            if (arr[j] > p) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
                i++
                j++
            } else {
                j++
            }
        }
        if (j === end) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        if (i + 1 === k) {
            return arr[i]
        } else {
            if (i + 1 < k) {
                // 右边
                return setlectK(arr, k, i + 1, end)
            } else {
                // 左边
                return setlectK(arr, k, start, i - 1)
            }
        }
    }
    return setlectK(nums, k, 0, nums.length - 1)
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