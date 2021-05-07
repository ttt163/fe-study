/** 153. 寻找旋转排序数组中的最小值
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i = 0
    let j = nums.length - 1
    while (i <= j) {
        if (nums[i] > nums[j]) {
            if (nums[i] > nums[i + 1]) {
                return nums[i + 1]
            }
            if (nums[j-1] > nums[j]) {
                return nums[j]
            }
            i++
            j--
        } else {
            return nums[i]
        }
    }
};
// 输入：nums = [3,4,5,1,2]
// 输出：1
// 解释：原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。
// 输入：nums = [11,13,15,17]
// 输出：11
// 解释：原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。
// 输入：nums = [4,5,6,7,0,1,2]
// 输出：0
// 解释：原数组为 [0,1,2,4,5,6,7] ，旋转 4 次得到输入数组。