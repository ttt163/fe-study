/** 1011. 在 D 天内送达包裹的能力
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function(weights, D) {
    let min = 0 // 最低载重
    let max = weights.reduce((sum, item) => {
        min = Math.max(min,item)
        return sum + item
    }, 0)
    
    const tryMinWeight = (minWeight) => {
        let d = 1
        let res = 0
        for (let i = 0; i < weights.length; i++) {
            res += weights[i]
            console.log(res, minWeight, '====minWeight')
            if (res > minWeight) {
                ++d
                res = weights[i]
            }
        }
        console.log(d, D)
        if (d > D) {
            return false
        }
        return true
    }
    // 二分搜查 最大元素和总重量之间
    while(min < max) {
        let mid =  Math.floor((min+max)/2)
        console.log(mid, '===')
        let isMinWeight = tryMinWeight(mid)
        if (isMinWeight) {
            max = mid
        } else {
            min = mid + 1 
        }
    }
    console.log(min, '===min')
    return min
};
shipWithinDays([1,2,3,4,5,6,7,8,9,10], 5)
// 输入：weights = [1,2,3,4,5,6,7,8,9,10], D = 5
// 输出：15
// 解释：
// 船舶最低载重 15 就能够在 5 天内送达所有包裹，如下所示：
// 第 1 天：1, 2, 3, 4, 5
// 第 2 天：6, 7
// 第 3 天：8
// 第 4 天：9
// 第 5 天：10

// 请注意，货物必须按照给定的顺序装运，因此使用载重能力为 14 的船舶并将包装分成 (2, 3, 4, 5), (1, 6, 7), (8), (9), (10) 是不允许的。 