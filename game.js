'use strict'
var gBoard
const gGame = {
  minesAroundCount: 2,
  isShown: false,
  isMine: false,
  isMarked: true,
  isOn: false
}
var virtualBoard = []

const gLevel = {
  SIZE: 4,
  MINES: 2
}
function init() {
  console.log('hello')
  gBoard = buildBoard()
  virtualBoard = buildBoard()
  createMines(virtualBoard, gLevel.MINES)
  initNegsCount(virtualBoard)
  renderBoard(gBoard, '.board')
  gGame.isOn = true
  var elEnd = document.getElementById('pop')
  elEnd.style.display = 'none'
}
function buildBoard() {
  const size = 4
  const board = []

  for (var i = 0; i < gLevel.SIZE; i++) {
    board.push([])

    for (var j = 0; j < gLevel.SIZE; j++) {
      if (board[i][j] !== MINE)
        board[i][j] = null
    }

  } return board
}

function setMinesNegsCount(virtualBoard, rowIdx, colIdx) {
  var minesAroundCount = 0
  for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
    for (var j = colIdx - 1; j <= colIdx + 1; j++) {
      var isColIdxValid = null
      var isIValid = i < virtualBoard.length && i >= 0
      if (isIValid) {
        var isColIdxValid = j < virtualBoard[i].length && j >= 0
        var isIdxCellClicked = rowIdx === i && colIdx === j

        if (isColIdxValid && isIValid && !isIdxCellClicked) {
          if (virtualBoard[i][j] === MINE) {
            minesAroundCount++


          }
        }
      }
    }
  }
  return minesAroundCount
}

function initNegsCount(virtualBoard) {
  for (var i = 0; i < gLevel.SIZE; i++) {
    for (var j = 0; j < gLevel.SIZE; j++) {
      console.log(`${i}/${j}`)
      if (virtualBoard[i][j] !== MINE) {
        var minesCount = setMinesNegsCount(virtualBoard, i, j)
        virtualBoard[i][j] = minesCount
      }
      console.log(virtualBoard)

    }
  }
}
function onCellClicked(i, j) {
  if (gGame.isOn) {
    var elCell = document.querySelectorAll('cell')
    gBoard[i][j] = virtualBoard[i][j]
    console.log(gBoard[i][j])
    if (gBoard[i][j] === MINE) {
      endGame()
    }
    elCell = gGame.isShown = true
    renderBoard(gBoard, '.board')
  }
}

function endGame() {
  var elEnd = document.getElementById('pop')
  elEnd.style.display = 'block'
  gGame.isOn = false
}

