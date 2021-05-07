/** 633. 平方数之和
 * @param {number} c
 * @return {boolean}
 */
// 栈溢出
// var judgeSquareSum = function(c) {
//     const isSquare = (a, b) => {
//         if (a < 0 || b < 0) {
//             return false
//         }
//         if (Math.sqrt(a) % 1 === 0 && Math.sqrt(b) % 1 === 0) { // 是完全平方
//             return true
//         }
//         return isSquare(a - 1, b + 1)
//     } 
//     return isSquare(c, 0)
// };

// 超出时间限制
// var judgeSquareSum = function(c) {
//     for (let a = c; a >= 0; a--) {
//         b = c - a
//         if (Math.sqrt(a) % 1 === 0 && Math.sqrt(b) % 1 === 0) { // 是完全平方
//             return true
//         }
//     }
//     return false
// };
var judgeSquareSum = function(c) {
    let a = Math.floor(Math.sqrt(c))
    let b = 0
    while(a >= b) {
        let sum = a * a + b * b 
        if (sum === c) { // 是完全平方
            return true
        } else if (sum > c) {
            a--
        } else {
            b++
        }
    }
    return false
};
console.log(judgeSquareSum(0))
// console.log(judgeSquareSum(999999999))
// 输入：c = 5
// 输出：true
// 解释：1 * 1 + 2 * 2 = 5

// 输入：c = 3
// 输出：false

// 输入：c = 1
// 输出：true