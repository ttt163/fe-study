/** 81. 搜索旋转排序数组 II
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let first = nums[0]
    if (target < first) {
        let i = nums.length - 1
        
        while(i) {
            console.log(nums[i -1], nums[i], i, '==i')
            if (nums[i] === target) {
                return true
            }
            if (nums[i -1] <= nums[i]) {
                i--
            } else {
                return false
            }
            
        }
    } else {
        let i = 0
        while(i < nums.length) {
            if (nums[i] === target) {
                return true
            }
            if (nums[i] <= nums[i + 1]) {
                i++
            } else {
                return false
            }
            
        }
    }
    return false
};

// 输入：nums = [2,5,6,0,0,1,2], target = 0
// 输出：true
// 输入：nums = [2,5,6,0,0,1,2], target = 3
// 输出：false