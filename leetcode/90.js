/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var subsetsWithDup = function(nums) {
//     let resSet = new Set()
//     let res = [[]]
//     let searchNext = (curr, itemRes) => {
//         console.log(curr, itemRes, resSet, res, '===')
//         if (curr > nums.length) {
//             return
//         }
//         itemRes.push(nums[curr])
//         let str = itemRes.join('')
//          console.log(str, !resSet.has(str), '===ss')
//         if (!resSet.has(str)) {
//             res.push(itemRes)
//             resSet.add(str)
//         }
//         if (curr + 1 < nums.length) {
//             searchNext(curr + 1, itemRes)
//         } else {
//             searchNext(curr + 1, [])
//         }
//     }
//     searchNext(0, [])
//     return res
// };

var subsetsWithDup = function(nums) {
    let resSet = new Set()
    let res = [[]]
    let i = 0
    let searchNext = (curr, str) => {
        if (curr > nums.length - 1) {
            return
        }
        let thisStr = str + nums[curr]
        if (!resSet.has(thisStr)) {
            // res.push(itemRes)
            resSet.add(thisStr)
        }
        let j = curr + 1
        while(j < nums.length -1) {
            searchNext(j, thisStr)
            j++
        }
    }
    while(i < nums.length) {
        searchNext(i, '')
        i++
    }
    console.log(resSet, '===resSet')
    return res
};
var subsetsWithDup = function(nums) {
    let res = [[]]
    let searchNext = (curr, start) => {
        console.log(nums.length -1, start)
        if (nums.length -1 <= start) {
            return []
        }
        let resArr = searchNext(nums[start], start + 1)
         console.log(resArr, 'resArr===')
        res.push(resArr)
        let newRes = []
        newRes.push([curr])
        for (let j = 0; j < resArr.length; j++) {
            const thisItem = resArr[j];
            console.log(curr, thisItem, '===')
            thisItem.unshift(curr)
            newRes.push(thisItem)
        }
        return newRes
    }
    for (let index = 0; index < nums.length; index++) {
        let currRes = searchNext(nums[index], index + 1)
        res.push(currRes)
        
    }
    return res
};
// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
// 1 <= nums.length <= 10
// -10 <= nums[i] <= 10


