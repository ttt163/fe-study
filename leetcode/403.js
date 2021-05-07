/** 403. 青蛙过河
 * @param {number[]} stones
 * @return {boolean}
 */
// 超出时间限制
// var canCross = function(stones) {
//   const dir = [-1, 0, 1]
//   let stonesMap = new Map()
//   for (let index = 0; index < stones.length; index++) {
//     stonesMap.set(stones[index], index)
//   }
//   const getIdx = (val, k) => {
//     if (k < 1) {
//       return -1
//     }
//     let nextVal = val + k
//     console.log(stonesMap, '===stonesMap')
//     return stonesMap.has(nextVal) ? stonesMap.get(nextVal) : -1
//   }
//   const goNext = (cIndex, k) => {
//     console.log(cIndex, '====cIndex')
//     if (cIndex >= stones.length -1) {
//       console.log('====qqq')
//       return true
//     }
//     let res = false
//     dir.map(d => {
//       let nextIndex = getIdx(stones[cIndex], k + d)
//       if (nextIndex !== -1) {
//         let thisRes = goNext(nextIndex, k + d)
//         console.log(cIndex, thisRes, nextIndex, k + d, '=====')
//         res = res || thisRes
//         if (res) {
//           return res
//         }
//       }
//     })
//     return res
//   }
//   return stonesMap.has(stones[0] + 1) && goNext(1, 1)
// };
// 未解决
var canCross = function (stones) {
  const dir = [-1, 0, 1]
  let stonesMap = new Map()
  let resMap = new Map()
  for (let index = 0; index < stones.length; index++) {
    stonesMap.set(stones[index], index)
  }
  const getIdx = (val, k) => {
    if (k < 1) {
      return -1
    }
    let nextVal = val + k
    return stonesMap.has(nextVal) ? stonesMap.get(nextVal) : -1
  }
  const goNext = (cIndex, k) => {
    console.log(cIndex, resMap, '====cIndex')
    if (cIndex >= stones.length - 1) {
      return true
    }
    if (resMap.has(`${cIndex}to${k}`)) {
      console.log('====has')
      return resMap.get(`${cIndex}to${k}`)
    }
    let res = false
    dir.map(d => {
      let nextIndex = getIdx(stones[cIndex], k + d)
      if (nextIndex !== -1) {
        let thisRes = !resMap.has(`${nextIndex}to${k + d}`) ? goNext(nextIndex, k + d) : resMap.get(`${nextIndex}to${k + d}`)
        resMap.set(`${nextIndex}to${k + d}`, thisRes)
        console.log(cIndex, thisRes, nextIndex, k + d, '=====')
        res = res || thisRes
        if (res) {
          resMap.set(`${cIndex}to${k}`, res)
          return resMap.get(`${cIndex}to${k}`)
        }
      }
    })
    resMap.set(`${cIndex}to${k}`, res)
    return resMap.get(`${cIndex}to${k}`)
  }
  return stonesMap.has(stones[0] + 1) && goNext(1, 1)
};
var canCross = function (stones) {
  const dir = [-1, 0, 1]
  let steps = []
  let resMap = new Map()
  let stonesMap = new Map()
  for (let index = 0; index < stones.length; index++) {
    stonesMap.set(stones[index], index)
    steps.push(-1)
  }
  steps[0] = 2 // 第一步只能跳1
  let start = 1
  let k = 1
  while (start < stones.length - 1) {
      console.log(start, stones.length - 1, k, steps)
    let kIndex = steps[start] + 1
    console.log(kIndex, '====kIndex')
    for (var i = kIndex; i < dir.length; i++) {
      let thisK = k + dir[i]
      console.log(start, thisK, i, '===222')
      if (thisK > 0) {
        let thisStep = stones[start] + thisK
        // console.log(thisStep, resMap, '===resMap')
        // console.log(stonesMap, start, stones[start], dir[i], thisStep)
        if (stonesMap.has(thisStep)) {
          steps[start] = i
          start = stonesMap.get(thisStep)
          k = thisK
          break
          // resMap.set(thisStep, true)
        }
      }
    }
    // return false
    console.log(start, i, i > dir.length - 1, '====i')
    if (i > dir.length - 1) {
      // start回到前一步
      console.log(start, stones[start], k, '====stt')
      start = stonesMap.get(stones[start] - k)
      console.log(start, '====sss')
    //   k = k - steps[start - 1]
    }
    if (start < 1) {
      return false
    }
  }
  console.log(steps,start, '===')
  return true
}
// console.log(canCross([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182]))
// console.log(canCross([0, 1, 3, 5, 6, 8, 11, 12, 17]))
console.log(canCross([0, 1, 3, 5, 6, 8, 12, 17]))

// 一只青蛙想要过河。 假定河流被等分为若干个单元格，并且在每一个单元格内都有可能放有一块石子（也有可能没有）。 青蛙可以跳上石子，但是不可以跳入水中。

// 给你石子的位置列表 stones（用单元格序号 升序 表示）， 请判定青蛙能否成功过河（即能否在最后一步跳至最后一块石子上）。

// 开始时， 青蛙默认已站在第一块石子上，并可以假定它第一步只能跳跃一个单位（即只能从单元格 1 跳至单元格 2 ）。

// 如果青蛙上一步跳跃了 k 个单位，那么它接下来的跳跃距离只能选择为 k - 1、k 或 k + 1 个单位。 另请注意，青蛙只能向前方（终点的方向）跳跃。



// 示例 1：

// 输入：stones = [0,1,3,5,6,8,11,12,17]
// 输出：true
// 解释：青蛙可以成功过河，按照如下方案跳跃：跳 1 个单位到第 2 块石子, 然后跳 2 个单位到第 3 块石子, 接着 跳 2 个单位到第 4 块石子, 然后跳 3 个单位到第 6 块石子, 跳 4 个单位到第 7 块石子, 最后，跳 5 个单位到第 8 个石子（即最后一块石子）。
// 示例 2：

// 输入：stones = [0,1,2,3,4,8,9,11]
// 输出：false
// 解释：这是因为第 5 和第 6 个石子之间的间距太大，没有可选的方案供青蛙跳跃过去。