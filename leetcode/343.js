/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let meno = {1: 1}
    for (let i = 2; i <= n; i++) {
        console.log(i)
        let res =  0
        for(let j = 1; j < i; j++) {
            console.log(i, j, meno, i*(i-j), meno[i-j])
            res = Math.max(res, Math.max(i*(i-j), i * meno[i-j]))
        }
        meno[i] = res
    }
    console.log(meno)
    return meno[n]
};
// var integerBreak = function (n) {
//     let meno = {}
//     var go = function (n) {
//         if( meno[n]) {
//             return meno[n]
//         }
//         for (let i = 1; i < n; i++) {
//             let res = 0
//             if(meno[i]) {
//                 res = meno[i]
//             } else {
//                 res = Math.max(res, Math.max(i * (n - i), i * integerBreak(n - i)))
//                 meno[i] = res
//             }
            
//         }
//         return res
//     }
//     return go(n)
// };

