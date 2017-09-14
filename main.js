var game;
$(document).ready(function() {
  game = new Game2048();
  renderTiles();
});

function renderTiles () {
  game.board.forEach(function(row, rowIndex) {
    row.forEach(function(cell, cellIndex) {
      if (cell) {
        var newTile =
          '<div class="' + 
            'tile ' +
            'val-' + cell + ' ' +
            'tile-position-' + rowIndex + '-' + cellIndex +
          '">' +
           cell +
          '</div>';
        
          // if cell=2 && rowIndex=0 && cellIndex=3
          // newTile = '<div class="tile val-2 tile-position-0-3">2</div>'

        $('#tile-container').append(newTile);
      }
    });
  });
}

function moveListeners (event) {
  console.log(event.keyCode);
  var keys = [37, 38, 39, 40];
  if (keys.indexOf(event.keyCode) < 0)
    return;
  switch (event.keyCode) {
    case 37: game.move("left");  break;
    case 38: game.move("up");    break;
    case 39: game.move("right"); break;
    case 40: game.move("down");  break;
  }

  resetTiles();
  renderTiles();
}

// document.addEventListener("keydown", moveListeners);
$(document).keydown(moveListeners); // The same as the previous line


function resetTiles () {
  var tilesContainer = document.getElementById("tile-container");
  var tiles          = tilesContainer.getElementsByClassName("tile");

  Array.prototype.slice.call(tiles).forEach(function (tile) {
    tilesContainer.removeChild(tile);
  });
}