
var GameState = {
  ACTIVE : 1
, DONE : 2
};

/**
 * @constructor
 */
function TickTackMatch(blockDimension) {
  /**
   * @private
   * @type {Array}
   */
  this.cells = [];
  /**
   * Block dimensions: 3 = 3x3, 5 = 5x5, 7 = 7x7
   * @private
   * @type {number}
   */
  this.blockDimension = blockDimension;
  /**
   * @private
   * @type {number}
   */
  this.gameState = GameState.ACTIVE;
}

/**
 * @public
 */
TickTackMatch.prototype.generateCells = function() {
  var totalCells = this.blockDimension * this.blockDimension
    , i;
  console.log('TickTackMatch.prototype.generateCells totalCells=' + totalCells + ", this.blockDimension=" + this.blockDimension)
  for (i = 0; i < totalCells; i++) {
    var cell = new TickTackCell();
    this.cells.push(cell);
  }
  this.drawTable();
}

/**
 * @private
 */
TickTackMatch.prototype.drawTable = function() {
  var i, j
    , gameView = document.getElementById("gameView")
    , table = document.createElement('table');
  var playTable = document.getElementById('playTable');
  if (playTable) {
    playTable.remove();
  }
  table.id = "playTable";
  for (i = 0; i < this.blockDimension; i++) {
    var tr = document.createElement('tr');
    for (j = 0; j < this.blockDimension; j++) {
      var td = document.createElement('td');
      td.id = "cell" + (i * this.blockDimension + j);
      td.className = "ttt-cell";
      td.className += " ttt-cell_" + i + "x" + j;
      var cell = new TickTackCell();
      cell.initialize(i, j, td);
      this.cells.push(cell);
      td.onclick = function() {
        mainApp.clickCell(this);
      };
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  gameView.insertBefore(table, gameView.childNodes[0]);
  //gameView.appendChild(table);
}