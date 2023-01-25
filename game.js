'use strict'
var gBoard
const NUM = 2
const gGame = {
  minesAroundCount: 2,
  isShown: false,
  isMine: false,
  isMarked: true
}

const gLevel = {
  SIZE: 4,
  MINES: 2
}
function init() {
  console.log('hello')
  gBoard = buildBoard()
  createBombs(gBoard)

  renderBoard(gBoard, '.board')
  gGame.isOn = true
}
function buildBoard() {
  const size = 4
  const board = []

  for (var i = 0; i < gLevel.SIZE; i++) {
    board.push([])

    for (var j = 0; j < gLevel.SIZE; j++) {
      if (board[i][j] !== BOMB)
        board[i][j] = gGame.isShown = true
    }

  } return board
}


for (var i = 0; i < gBoard.length; i++) {
  for (var j = 0; j < gBoard[i].length; j++) {

    function setMinesNegsCount(gBoard, rowIdx, colIdx) {
      var minesAroundCount = 0
      for (var i = rowIdx - 1; i < rowIdx + 1; i++) {
        if (i < 0 || i >= gBoard.length) continue
        for (var j = colIdx - 1; j < colIdx + 1; j++) {
          if (j < 0 || j >= gBoard.length) continue
          var currentCell = gBoard[i][j]
          if (currentCell === BOMB) minesAroundCount++
        }
        return minesAroundCount

      }

    }
  }
}