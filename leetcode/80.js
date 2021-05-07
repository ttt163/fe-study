/** 80. 删除有序数组中的重复项 II
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 1
    let i = 0
    let j = i + 1
    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            i = j
            j = i + 1
            count = 1
        } else {
            if (count >= 2) {
                // 删除
                nums.splice(j, 1)
            } else {
                j++
                count++
            }
        }
    }
    return nums.length
};

// 输入：nums = [1,1,1,2,2,3]
// 输出：5, nums = [1,1,2,2,3]