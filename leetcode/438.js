/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let tMap = new Map()
    let oMap = new Map()
    for (let index = 0; index < p.length; index++) {
        tMap.set(p[index], 0)
        if(oMap.has(p[index])) {
            oMap.set(p[index], oMap.get(p[index]) + 1)
        } else {
            oMap.set(p[index], 1)
        }
    }
    let start = 0
    let end = -1
    let count = 0
    let resArr = []
    while(end < s.length) {
         console.log(count,  p.length, start, end, s[end])
        if ((end + 1 - start) < p.length) {
            if (tMap.has(s[++end])) {
                if(tMap.get(s[end]) < oMap.get(s[end])) {
                    count++
                }
                tMap.set(s[end], tMap.get(s[end]) + 1)
            }
        } else {
            console.log(count, start, '===count')
            if (count === p.length) {
                resArr.push(start)
            }
            if (tMap.has(s[start])) {
                tMap.set(s[start], tMap.get(s[start]) - 1)
                if(tMap.get(s[start]) < oMap.get(s[start])) {
                    count--
                }
            }
            start++
        }
    }
    return resArr
};

// 输入:
// s: "cbaebabacd" p: "abc"

// 输出:
// [0, 6]