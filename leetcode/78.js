/** 78. 子集
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯法
// var subsets = function(nums) {
//     let result = [[]]
//     const searchNext = (start, res) => {
//         console.log(start, res, start === nums.length - 1, result)
//         if (start === nums.length - 1) {
//             // res.push(nums[start])
//             result.push(res)
//             return
//         }
//         res.push(nums[start])
//         for (let i = start; i < nums.length; i++) {
//             searchNext(start + 1, res)
//             res.pop()
//         }
//     }
//     searchNext(0, [])
//     return result
// };
// 

// 记忆化搜索
// var subsets = function(nums) {
//     let m = new Map()
//     const searchNext = (start) => {
//         if (start > nums.length - 1) {
//             return []
//         }
//         let res = []
//         res.push([nums[start]])
//         let nextRes = m.has(start + 1) ? m.get(start + 1) : searchNext(start + 1)
//         if (nextRes.length) {
//             nextRes.map((arr) => {
//                 res.push([
//                     nums[start],
//                     ...arr,
//                 ])
//             })
//             res = [
//                 ...res,
//                 ...nextRes,
//             ]
//         }
//         nextRes[start] = res
//         m.set(start, res)
//         return res
//     }
//     let tempArr = [
//         [],
//         ...searchNext(0),
//     ]
//     return tempArr
// };

// 动态规划
var subsets = function(nums) {
    let nextRes = []
    let last = nums.length - 1
    nextRes = [[nums[last]]]
    for(i = last - 1; i >= 0; i-- ) {
        let res = []
        res.push([nums[i]])
        if (nextRes.length) {
            nextRes.map((arr) => {
                res.push([
                    nums[i],
                    ...arr,
                ])
            })
            res = [
                ...res,
                ...nextRes,
            ]
        }
        nextRes = res
    }
    nextRes.push([])
    return nextRes
}
console.log(subsets([1,2,3,4]), '===j')

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

// 输入：nums = [0]
// 输出：[[],[0]]
