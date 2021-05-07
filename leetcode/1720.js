/** 1720. 解码异或后的数组
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  let arr = []
  arr.push(first)
  for (var i = 0; i < encoded.length; i++) {
    let item = encoded[i] ^= arr[i]
    console.log(item)
    arr.push(item)
  }
  return arr
};
console.log(decode([6], 1))
// 输入：encoded = [1,2,3], first = 1
// 输出：[1,0,2,1]
// 解释：若 arr = [1,0,2,1] ，那么 first = 1 且 encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]

// 输入：encoded = [6,2,7,3], first = 4
// 输出：[4,2,0,7,4]