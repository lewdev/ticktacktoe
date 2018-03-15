
/**
 * @constructor
 */
function TickTackCell() {
  /** @type {number} */
  this.row = 0;
  /** @type {number} */
  this.col = 0;
  /** @type {number} */
  this.player = 0;
  /** @type {Element} */
  this.td = null;
}

TickTackCell.prototype.initialize = function(row, col, td) {
  this.row = row;
  this.col = col;
  this.td = td;
};

TickTackCell.prototype.onSelection = function(player) {
  log("clicked row=" + this.row + ", col=" + this.col + ", player=" + player.name);
};