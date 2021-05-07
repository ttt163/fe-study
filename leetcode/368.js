/** 368. 最大整除子集
 * @param {number[]} nums
 * @return {number[]}
 */
// 回溯法 超出时间限制
// var largestDivisibleSubset = function (nums) {
//     nums.sort((a, b) => {
//         return a - b
//     })
//     let result = []
//     let findSubset = (start, res) => {
//         console.log(start, res)
//         if (start >= nums.length) {
//             console.log(result, res, '===result==res')
//             result = res.length > result.length ? JSON.parse(JSON.stringify(res)) : result
//             console.log(result, '===ppp')
//             return
//         }
//         for (let i = start; i < nums.length; i++) {
//             // let flag = isItem(res, nums[i])
//             let flag = res.length === 0 || nums[i] % res[res.length - 1] === 0
//             console.log(flag)
//             if (flag) {
//                 res.push(nums[i])
//             }
//             findSubset(i + 1, res)
//             if (flag) {
//                 res.pop()
//             }
//         }
//     }
//     findSubset(0, [])
//     console.log(result, '===result')
//     return result
// };
var largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => {
        return b - a
    })
    nums.unshift(1)
    console.log(nums, '=====nums')
    let meno = new Map()
    let findSubset = (start) => {
        // if (meno.has(start)) {
        //     return meno.get(start)
        // }
        if (start === nums.length - 1) {
            // meno.set(start, [nums[start]])
            // return meno.get(start)
            return [nums[start]]
        }
        let maxRes = []
        for (let i = start + 1; i < nums.length; i++) {
            // let res = meno.has(start) ? findSubset(i) : meno.get(start)
            console.log(nums[start], nums[i], maxRes)
            if (nums[start] % nums[i] === 0) { // 有问题
                let res = findSubset(i)
                res.unshift(nums[start])
                maxRes = res.length > maxRes.length ? JSON.parse(JSON.stringify(res)) : maxRes
                // return res
            }
            return maxRes
        }
    }
    const res = findSubset(0)
    console.log(res, '====')
    return res
};
largestDivisibleSubset([5,9,18,54,108,540,90,180,360,720])
// [720, 540, 360, 180, 108, 90, 54, 18, 9, 5]
// [5,9,18,54,108,540,90,180,360,720]
// [9,18,90,180,360,720]
// 输入：nums = [1,2,3]
// 输出：[1,2]
// 解释：[1,3] 也会被视为正确答案

// 输入：nums = [1,2,4,8]
// 输出：[1,2,4,8]