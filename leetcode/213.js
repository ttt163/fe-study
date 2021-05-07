/** 213. 打家劫舍 II
 * @param {number[]} nums
 * @return {number}
 */
// 未解决
// var rob = function(nums) {
//     let robFirst = false
//     const meno = new Map()
//     const tryRob = (i) => {
//         console.log(i, robFirst, meno, nums[i], '==ii')
//         if (i >= nums.length - 1) {
//             // 如果是最后一个房子，判断第一个是否被偷
//             if (i > nums.length - 1) {
//                 return 0
//             }
//             if(robFirst && nums[nums.length - 1] > nums[0]) {
//                 meno.set(nums.length - 1, nums[nums.length - 1])
//                 return nums[nums.length - 1] - nums[0]
//             } else {
//                 meno.set(i, nums[i])
//                 return meno.get(i)
//             }
//         }
//         if (meno.has(i)) {
//             return meno.get(i)
//         }
//         // 如果偷i个房子，下次尝试偷i+2个房子
//         let thisRes = 0
//         if(i === 0) {
//             robFirst = true
//         }
//         thisRes = nums[i]+ (meno.has(i+2) ? meno.get(i+2) : tryRob(i+2))
//         console.log(thisRes, i, 'i====thisRes')
//         // 如果不偷i个房子，尝试偷i+1个房子
//         if(i === 0) {
//             robFirst = false
//         }
//         let thisRes2 = tryRob(i+1)
//         console.log(thisRes, thisRes2, thisRes2 > thisRes, '==thisRes2=')
//         // if(thisRes >= thisRes2 && i === 0) {
//         //     robFirst = true
//         // }
//         meno.set(i, Math.max(thisRes, thisRes2))
//         console.log(meno, '====meno')
//         return meno.get(i)
//     }
    
//     return tryRob(0)
// };
// 递归 超出时间限制
var rob = function(nums) {
    if (nums.length === 1) {
        return nums[0]
    }
    const tryRob = (start, end) => {
        if (start > end) {
            return 0
        }
        return Math.max(nums[start] + tryRob(start + 2, end), tryRob(start + 1, end))
    }
    
    return Math.max(tryRob(0, nums.length - 2), tryRob(1, nums.length -1))
};
// 记忆化搜索
var rob = function(nums) {
    let meno = new Map()
    if (nums.length === 1) {
        return nums[0]
    }
    const tryRob = (start, end) => {
        if (start > end) {
            return 0
        }
        if (meno.has(`${start}&${end}`)) {
            return meno.get(`${start}&${end}`)
        }
        meno.set(`${start}&${end}`, Math.max(nums[start] + tryRob(start + 2, end), tryRob(start + 1, end)))
        return meno.get(`${start}&${end}`)
    }
    
    return Math.max(tryRob(0, nums.length - 2), tryRob(1, nums.length -1))
};
// 动态规划 未解决？
var rob = function(nums) {
    let meno = new Map()
    if (nums.length === 1) {
        return nums[0]
    }
    // let rob0
    // 0~ nums.length-2
    // 1～nums.length-1
    for (let j = 1; j < nums.length - 1; j++) {
        let res1 = nums[j]
        let res2 = 0
        for (let i = j + 2; i < nums.length - 2; i+=2) {
            res1 += nums[i]
        }
        for (let i = j+1; i < nums.length - 1; i+=2) {
            res2 += nums[i]
        }
        console.log(res1, res2)
        meno.set(j, Math.max(res1, res2))
    }
    console.log(meno, '===nm')
    return  Math.max(meno.get(1) + nums[nums.length - 1], nums[0] + (!meno.get(2) ? 0 : meno.get(2)))
    
};
// console.log(rob([104,209,137,52,158,67,213,86,141,110,151,127,238,147,169,138,240,185,246,225,147,203,83,83,131,227,54,78,165,180,214,151,111,161,233,147,124,143]))
// console.log(rob([1,3,1,3,100]), '===rob=[1,3,1,3,100]')
console.log(rob([2,3,2]))
// console.log(rob([1,2,3,1]))
// 输入：nums = [1,2,3,1]
// 输出：4