/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            [nums[i], nums[k]] = [nums[k], nums[i]]
            k++
        }
    }
    nums = nums.slice(0, k)
    return k
};
// 输入：nums = [3,2,2,3], val = 3
// 输出：2, nums = [2,2]
