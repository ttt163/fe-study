/** 剑指 Offer 47. 礼物的最大价值
 * @param {number[][]} grid
 * @return {number}
 */
// 超出时间限制
// var maxValue = function(grid) {
//   if (!grid.length) {
//     return res
//   }
//   let cLen = grid[0].length
//   const isOut = (r, c) => {
//     return r > grid.length -1 || c > cLen -1
//   }
//   let goNext = (r, c, res) => {
//     if (isOut(r, c)) {
//       return res
//     }
//     res += grid[r][c]
//     let nextR = r+1
//     let nextC = c+1
    
//     return Math.max(goNext(nextR, c, res), goNext(r, nextC, res))
//   }
//   return goNext(0, 0, 0)
// };
// 记忆化搜索
var maxValue = function(grid) {
  if (!grid.length) {
    return res
  }
  let cLen = grid[0].length
  var arr = new Array(grid.length).fill(0).map(_ => new Array(cLen).fill(-1))
  const isOut = (r, c) => {
    return r > grid.length -1 || c > cLen -1
  }
  let goNext = (r, c) => {
    if (isOut(r, c)) {
      return 0
    }
    let nextR = r+1
    let nextC = c+1
    let res = arr[r][c]!== -1 ? arr[r][c] : grid[r][c] + Math.max(goNext(nextR, c), goNext(r, nextC))
    arr[r][c] = res
    return res
  }
  return goNext(0, 0)
};
var maxValue = function(grid) {
  if (!grid.length) {
    return res
  }
  let cLen = grid[0].length
  var arr = new Array(grid.length).fill(0).map(_ => new Array(cLen).fill(-1))
  const isOut = (r, c) => {
    return r > grid.length -1 || c > cLen -1
  }
  let goNext = (r, c) => {
    if (isOut(r, c)) {
      return 0
    }
    let nextR = r+1
    let nextC = c+1
    let res = arr[r][c]!== -1 ? arr[r][c] : grid[r][c] + Math.max(goNext(nextR, c), goNext(r, nextC))
    arr[r][c] = res
    return res
  }
  return goNext(0, 0)
};
let g = [[5,0,1,1,2,1,0,1,3,6,3,0,7,3,3,3,1],[1,4,1,8,5,5,5,6,8,7,0,4,3,9,9,6,0],[2,8,3,3,1,6,1,4,9,0,9,2,3,3,3,8,4],[3,5,1,9,3,0,8,3,4,3,4,6,9,6,8,9,9],[3,0,7,4,6,6,4,6,8,8,9,3,8,3,9,3,4],[8,8,6,8,3,3,1,7,9,3,3,9,2,4,3,5,1],[7,1,0,4,7,8,4,6,4,2,1,3,7,8,3,5,4],[3,0,9,6,7,8,9,2,0,4,6,3,9,7,2,0,7],[8,0,8,2,6,4,4,0,9,3,8,4,0,4,7,0,4],[3,7,4,5,9,4,9,7,9,8,7,4,0,4,2,0,4],[5,9,0,1,9,1,5,9,5,5,3,4,6,9,8,5,6],[5,7,2,4,4,4,2,1,8,4,8,0,5,4,7,4,7],[9,5,8,6,4,4,3,9,8,1,1,8,7,7,3,6,9],[7,2,3,1,6,3,6,6,6,3,2,3,9,9,4,4,8]]
console.log(maxValue(g))
// 输入: 
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// 输出: 12
// 解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物