function TickTackToeApp() {
  var thisRef = this;
  this.currentGame = null;
  this.blockDimension = 3;
  /**
   * Main user's data.
   */
  this.player1 = {
    name : "",
    wins : 0,
    character : 'X',
    characterColor : 'red'
  };
  /**
   * Player 2's user data.
   */
  this.player2 = {
    name : "",
    wins : 0,
    character : 'O',
    isCpu : true
  };
}

function GameMatch(player1, player2, blockDimension) {
  /**
   * @private
   * @type {TickTackBlocks}
   */
  this.blockArray = [];
  /**
   * Block dimensions: 3 = 3x3, 5 = 5x5, 7 = 7x7
   * @private
   * @type {int}
   */
  this.blockDimension = 3;
  this.gameEnded = false;
  this.playerTurn = player1;
}

var cells = document.getElementsByClassName('ttt-cell'), messageDiv = document
    .getElementById("message"), playerWinCountsDiv = document
    .getElementById("playerWinCounts"), isCircle = false, size = cells.length, i, playerXWinCount = 0, playerOWinCount = 0, playerXColor = 'red', playerOColor = 'blue', playerXText = '<span style="color: '
    + playerXColor + ';">X</span>', playerOText = '<span style="color: '
    + playerOColor + ';">O</span>', gameEnded = false;

window.onload = function() {
  writeMessage("Player " + (isCircle ? playerOText : playerXText) + "'s turn");
  updatePlayerWinCounts();

  for (i = 0; i < size; i++) {
    var cell = cells[i];
    cell.onclick = function() {
      if (gameEnded) {
        return;
      } else if (this.innerHTML == '') {
        this.innerHTML = isCircle ? 'O' : 'X';
        this.style.color = isCircle ? playerOColor : playerXColor;
        isCircle = !isCircle;
        // check if won
        writeMessage("Player " + (isCircle ? playerOText : playerXText)
            + "'s turn");
        whoWon();
      } else {
        writeMessage("Already used. Player "
            + (isCircle ? playerOText : playerXText) + "'s turn");
        return;
      }
    };
  }
};

var cell1 = document.getElementById("cell1"), cell2 = document
    .getElementById("cell2"), cell3 = document.getElementById("cell3"), cell4 = document
    .getElementById("cell4"), cell5 = document.getElementById("cell5"), cell6 = document
    .getElementById("cell6"), cell7 = document.getElementById("cell7"), cell8 = document
    .getElementById("cell8"), cell9 = document.getElementById("cell9");

function whoWon() {
  var winner;
  if ((winner = allEqual(cell1, cell2, cell3))
      || (winner = allEqual(cell4, cell5, cell6))
      || (winner = allEqual(cell7, cell8, cell9))
      || (winner = allEqual(cell1, cell4, cell7))
      || (winner = allEqual(cell2, cell5, cell8))
      || (winner = allEqual(cell3, cell6, cell9))
      || (winner = allEqual(cell1, cell5, cell9))
      || (winner = allEqual(cell3, cell5, cell7))) {
    writeMessage("Player " + (winner == 'O' ? playerOText : playerXText)
        + " wins! Reset game to play again.");
    gameEnded = true;
    if (winner == 'O') {
      playerOWinCount++;
    } else {
      playerXWinCount++;
    }
    updatePlayerWinCounts();
    return true;
  } else {
    var allFull = true;
    for (i = 0; i < size; i++) {
      if (cells[i].innerHTML == "") {
        allFull = false;
        break;
      }
    }
    if (allFull) {
      gameEnded = true;
      writeMessage("No winner found. Reset game to play again.");
      isCircle = !isCircle;
      return false;
    }
  }
  return false;
}

function allEqual(block1, block2, block3) {
  var blockEntry1 = block1.innerHTML, blockEntry2 = block2.innerHTML, blockEntry3 = block3.innerHTML;
  if (blockEntry1 != '' && blockEntry2 != '' && blockEntry3 != ''
      && blockEntry1 == blockEntry2 && blockEntry1 == blockEntry3) {
    return blockEntry1;
  }
  return false;
}

function resetGame() {
  for (i = 0; i < size; i++) {
    cells[i].innerHTML = '';
  }
  writeMessage("Player " + (isCircle ? playerOText : playerXText) + "'s turn");
  gameEnded = false;
}

function writeMessage(message) {
  messageDiv.innerHTML = message;
}
function updatePlayerWinCounts() {
  playerWinCountsDiv.innerHTML = 'Player ' + playerXText + ' Wins: '
      + playerXWinCount + '<br/>Player ' + playerOText + ' Wins: '
      + playerOWinCount;
}
