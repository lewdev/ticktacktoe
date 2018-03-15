/**
 * @constructor
 */
function MainApp() {
  var thisRef = this;
  /** @type {number} */
  this.blockDimension = 4;
  /** @type {boolean} */
  this.isPvp = true;
  /** @type {Element} */
  this.playTable = null;
  /** @type {TickTackMatch} */
  this.currentMatch = null;
  /** @type {boolean} */
  this.isMatchInProgress = false;
  /** @type {Object} */
  this.data = {
    users: [
      { id: 0, name: "CPU",      wins: 0, losses: 0, character: "Z", color: "#000000" },
      { id: 1, name: "Player 1", wins: 0, losses: 0, character: "X", color: "#000000" }
    ],
    players: [
      { userId: 0 },
      { userId: 1 }
    ],
    matches: []
  };
  /** @type {Object} */
  this.currentPlayer = this.data.players[1];
  /** @type {Element} */
  this.gameView = document.getElementById("gameView");
  /** @type {Element} */
  this.startView = document.getElementById("startView");
  /** @type {Element} */
  this.restartView = document.getElementById("restartView");
  /** @type {Element} */
  this.endView = document.getElementById("endView");
}

/**
 * @private
 */
MainApp.prototype.initialize = function() {
  this.currentMatch = new TickTackMatch(this.blockDimension);
  this.currentMatch.generateCells();

  //apply table resizing.
  var thisRef = this;
  window.addEventListener('resize', function() { thisRef.resizeTable(); }, false);
  this.resizeTable();
};

MainApp.prototype.startGame = function() {
  this.showView('startView');
  this.isMatchInProgress = true;
  this.initialize();
};

MainApp.prototype.playGame = function() {
  this.showView('gameView');
  this.initialize();
};

MainApp.prototype.restartGame = function() {
  this.showView('startView');
  this.initialize();
};

MainApp.prototype.resumeGame = function() {
  this.showView('gameView');
};

MainApp.prototype.back = function() {
  if (this.isMatchInProgress) {
    this.resumeGame();
  }
  else {
    this.showView('startView');
  }
};


MainApp.prototype.restartConfirm = function() {
  this.showView('restartView');
};

/**
 * @param {string} viewId
 */
MainApp.prototype.showView = function(viewId) {
  console.log("showView viewId=" + viewId);
  this.gameView.style.display = 'none';
  this.startView.style.display = 'none';
  this.restartView.style.display = 'none';
  this.endView.style.display = 'none';
  var view = document.getElementById(viewId);
  if (view) {
    view.style.display = 'block';
  }
}

/** @public */
MainApp.prototype.resizeTable = function() {
  log("resizeTable");
  //resize canvas
  var screenWidth = window.innerWidth
    , screenHeight = window.innerHeight
    , sizePercent = .85
    , tableWidth = screenHeight * sizePercent
    , playTable = document.getElementById("playTable")
    , i
  ;
  if (screenWidth < screenHeight) {
    tableWidth = Math.floor(screenWidth * sizePercent);
  }
  playTable.style.width = tableWidth;
  playTable.style.height = tableWidth;

  this.gameView.style.width = tableWidth;
  this.startView.style.width = tableWidth;
  this.restartView.style.width = tableWidth;
  this.endView.style.width = tableWidth;

  var h1List = document.getElementsByTagName("h1");
  for (i = 0; i < h1List.length; i++) {
    h1List[i].style.fontSize = (tableWidth / 900) * 96 + "px";
    h1List[i].style.padding = (tableWidth / 900) * 30 + "px";
  }
  //reset screen size values
  var cellSize = Math.floor(tableWidth / this.blockDimension);
  document.querySelectorAll('.ttt-cell').forEach(function (element, index) {
    element.style.width = cellSize;
    element.style.height = cellSize;
  });
};

/**
 * @public
 */
MainApp.prototype.clickCell = function(td) {
  if (td.className) {
    var name = td.className
      , arr = name.split(' ')
      , i
      , size = arr.length
    ;
    for (i = 0; i < size; i++) {
      if (arr[i].startsWith('ttt-cell_')) {
        var str = arr[i].split('_')[1]
          , arr3 = str.split('x')
          , row = arr3[0]
          , col = arr3[1]
        ;
        log("asdf row=" + row + ", col=" + col);
        break;
      }
    }
  }
  
};
