
var mainApp = new MainApp();

window.onload = function() {
  mainApp.startGame();
};

function log(message) {
  var consoleDiv = document.getElementById("console");
  message = Math.floor(Date.now() / 1000) + ": " + message + "<br/>";
  consoleDiv.innerHTML += message;
  if (console) {
    console.log(message);
  }
}

window['startGame'] = function() {
  mainApp.startGame();
};
window['playGame'] = function() {
  mainApp.playGame();
};
window['restartGame'] = function() {
  mainApp.restartGame();
};
window['restartConfirm'] = function() {
  mainApp.restartConfirm();
};
window['restartCancel'] = function() {
  mainApp.showView('gameView');
};
window['configGame'] = function() {
  //mainApp.pauseGame();
  mainApp.showView('configView');
};
window['back'] = function() {
  mainApp.back();
};
window['endGame'] = function() {
  mainApp.showView('endView');
};