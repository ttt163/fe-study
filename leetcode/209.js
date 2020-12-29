/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let l = 0
    let r = 0
    let res = nums.length + 1
    let count = nums[l]
    while(l <= r) {
        if (count < s) {
            if( r >= nums.length -1) {
                break
            }
            count += nums[++r]
        } else {
            res= Math.min(res, r - l + 1)
            count -= nums[l++]
        }
        
    }
    return res > nums.length ? 0 : res
};