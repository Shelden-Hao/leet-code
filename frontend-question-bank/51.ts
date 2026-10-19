/**
 * 51. N 皇后
 * https://leetcode.cn/problems/n-queens/description/
 * @param n n个皇后 n排n列
 */
function solveNQueens(n: number): string[][] {
    const result: string[][] = []
    // 默认棋盘 所有位置都是 `.`
    const board: string[][] = Array.from({length: n}, () => {
        return new Array(n).fill('.')
    })

    function backtrack(n: number, row: number, board: string[][]) {
        if (row === n) {
            result.push(transformBoard(board))
            return
        }
        for (let col = 0; col < n; col++) {
            if (isValid(col, row, board)) {
                board[row][col] = 'Q'
                backtrack(n, row + 1, board)
                board[row][col] = '.'
            }
        }
    }

    backtrack(n, 0, board)
    return result
};

/**
 * 判断当前位置是否可以放皇后
 * @param col 当前列
 * @param row 当前行
 * @param board 棋盘数组
 */
function isValid(col: number, row: number, board: string[][]): boolean {
    const maxLen = board.length
    if (col < 0 || row < 0 || col >= maxLen || row >= maxLen) return false
    // 检查了列(上方)
    for (let row of board) {
        if (row[col] === 'Q') return false
    }
    // 检查45度方向(右上方)
    let x:number = col
    let y: number = row
    while (y >= 0 && x < maxLen) {
        if (board[y--][x++] === 'Q') {
            return false
        }
    }
    // 检查135度方向(左上角)
    x = col
    y = row
    while (x >= 0 && y >= 0) {
        if (board[y--][x--] === 'Q') {
            return false
        }
    }
    return true
}

/**
 * 将此时的情况(一种棋盘)转为一个字符串数组
 * @param board 棋盘数组
 */
function transformBoard(board: string[][]): string[] {
    const result: string[] =[]
    for (let row of board) {
        result.push(row.join(''))
    }
    return result
}
