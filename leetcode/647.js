

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    if (s.length < 2) {
        return 1
    }
    let count = 0
    let validStr = (start, end) => {
        start++
        end--
        while (start < end) {
            if (s[start] !== s[end]) {
                return false
            }
            start++
            end--
        }
        return true
    }
    for (let i = 0; i < s.length; i++) {
        count++
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] === s[j]) {
                // 验证是否是回文串
                if (validStr(i, j)) {
                    count++
                }
            }
        }
    }
    return count
};

// 输入："aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
