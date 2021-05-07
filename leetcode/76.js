/** 76. 最小覆盖子串
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let tMap = new Map()
    let oMap = new Map()
    for (let index = 0; index < t.length; index++) {
        tMap.set(t[index], 0)
        if(oMap.has(t[index])) {
            oMap.set(t[index], oMap.get(t[index]) + 1)
        } else {
            oMap.set(t[index], 1)
        }
    }
    let startIndex = 0
    let endIndex = -1
    let count = 0
    let resStr = ''
    while(startIndex < s.length) {
         console.log(endIndex < s.length,count, tMap, oMap, startIndex, s[endIndex],endIndex,'===')
        if (endIndex + 1 < s.length && count < t.length) {
            if (tMap.has(s[++endIndex])) {
                console.log(tMap.get(s[endIndex]), oMap.get(s[endIndex]), s[endIndex],'===')
                if(tMap.get(s[endIndex]) < oMap.get(s[endIndex])) {
                    count++
                }
                tMap.set(s[endIndex], tMap.get(s[endIndex]) + 1)
            }
            console.log(count, '===count', s[endIndex])
            // endIndex++
        } else {
             console.log(resStr, s.substring(startIndex, endIndex + 1), count, '===nnn')
            if (count >= t.length) {
                if (!resStr || resStr.length > endIndex - startIndex + 1) {
                    resStr = s.substring(startIndex, endIndex + 1)
                }
            }
            if (tMap.has(s[startIndex])) {
                console.log(tMap.get(s[startIndex]), oMap.get(s[startIndex]), s[startIndex], '===aaa')
               
                tMap.set(s[startIndex], tMap.get(s[startIndex]) - 1)
                 if(tMap.get(s[startIndex]) < oMap.get(s[startIndex])) {
                    count--
                }
            }
            startIndex++
        }
    }
    console.log(resStr, '===resStr')
    return resStr
};

// 输入：s = "ADOBECODEBANC", t = "ABC"
// 输出："BANC"