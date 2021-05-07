/**
 * @param {string} s
 * @return {number}
 */
// var numDecodings = function(s) {
//     let count = 0
//     let numsCompose = (s) => {
//         let num1 = parseInt(s[0])
//         if (num1 === 0) {
//             return
//         }
//         if (s.length < 2) {
//             count++
//             return
//         }
//         numsCompose(s.substring(1))
//         let num2 = parseInt(`${s[0]}${s[1]}`)
//         if (num2 > 26) {
//             return
//         }
//         numsCompose(s.substring(2))
//     }
//     numsCompose(s)
//     return count
// };
var numDecodings = function(s) {
    let numsMap = new Map()
    let numsCompose = (s) => {
        let num1 = parseInt(s[0])
        let thisCount = 0
        if (num1 === 0) {
            return 0
        }
        if (s.length < 2) {
            return 1
        }
        console.log(numsMap, numsMap.has(s), '====numsMap')
        if (numsMap.has(s)) {
            return numsMap.get(s)
        }
        thisCount += numsCompose(s.substring(1))
        let num2 = parseInt(`${s[0]}${s[1]}`)
        if (num2 <= 26) {
            thisCount += numsCompose(s.substring(2))
        }
         numsMap.set(s, thisCount)
         return thisCount
    }
    return numsCompose(s)
};
// 输出：2
// 解释：它可以解码为 "AB"（1 2）或者 "L"（12）。
// 输入：s = "0"
// 输出：0