/** 137. 只出现一次的数字 II
 * 给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  if (nums.length === 1) {
    return nums[0]
  }
  let m = new Map()
  for (let i = 0; i < nums.length; i++) {
    if(!m.has(nums[i])) {
      m.set(nums[i], 1)
    } else {
      m.set(nums[i], m.get(nums[i]) + 1)
    }
  }
  for(let [key, val] of m.entries()) {
    if (val === 1) {
      return key
    }
  }
};

// 输入：nums = [2,2,3,2]
// 输出：3

// 输入：nums = [0,1,0,1,0,1,99]
// 输出：99