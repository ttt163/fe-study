/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let p = m + n - 1
    while(i >= 0 && j >= 0) {
        nums1[p--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--]
    }
    while (j >= 0) {
        nums1[p--] = nums2[j--]
    }
};

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]