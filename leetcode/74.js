/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const row = matrix.length
    const col = matrix[0].length
    let goNext = (i, j) => {
        let thisVal = matrix[i][j]
        if (thisVal === target) {
            return true
        }
        if (i >= row && j >= col) {
            return false
        }
        let nextRow = i + 1
        let nextCol = j
        if (nextRow >= row || matrix[nextRow][nextCol] > target) {
            nextRow = i
            nextCol = j + 1
        }
        if (nextCol >= col || matrix[nextRow][nextCol] > target) {
            return false
        }
        return goNext(nextRow, nextCol)
    }
    return goNext(0, 0)
};
// 输入：matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// 输出：true
