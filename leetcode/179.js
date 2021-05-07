/** 179. 最大数
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const comp = (a, b) => {
        return `${b}${a}` - `${a}${b}`
    }
    nums.sort(comp)
    let str = ''
    for(let i = 0; i< nums.length; i++) {
        str += nums[i]
    }
    return str
};

// 输入：nums = [3,30,5,9,34]
// 输出："9534330"

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 109
