'use strict'
var count
const BOMB = '💣'

function createBombs(board) {
  board[2][3] = BOMB
  board[1][3] = BOMB
  // for (var i = 0; i < 1; i++) {
  //   createBombs(board)
  // }
}
