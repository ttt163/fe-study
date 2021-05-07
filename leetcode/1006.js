/** 在整数的递减序列中，我们以一个固定顺序的操作符序列来依次替换原有的乘法操作符：乘法(*)，除法(/)，加法(+)和减法(-)。
 * @param {number} N
 * @return {number}
 */
    var clumsy = function(N) {
        let optIndex = 0
        let lastRes
        let res
        for (let val = N; val > 0; val--) {
             console.log(optIndex, '===', res, val)
            if (optIndex === 0) {
                res = val
            } else if (optIndex === 1) {
                res = res * val
            } else if (optIndex === 2) {
                res = Math.floor(res / val)
                lastRes = lastRes === undefined ? res : lastRes - res
                res = 0
            } else if (optIndex === 3) {
                lastRes = lastRes + val
            }
            optIndex = optIndex + 1 === 4 ? 0 : optIndex + 1
        }
        console.log(lastRes, res, '====')
        res = lastRes === undefined ? res : lastRes - res
        return res
    };

// 输入：4
// 输出：7
// 解释：7 = 4 * 3 / 2 + 1