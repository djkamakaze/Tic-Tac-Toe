$(function(){
  var possibleWins = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  var CORNER_SQUARES = [0, 2, 6, 8];
  var SIDE_SQUARES = [1, 3, 5, 7];
  var CENTER_SQUARE = 4;
  var board = $("#board");
  var squares = board.find("td");
  var info = $("#info");
  var computersTurn = false;
  var X = "X";
  var O = "O";

  var getPossibleCombosForSelection = function(squareIndex) {
    // loop through each possible winning combo, seeing if it contains the index of
    // the selected square
    var possibleCombos = [];
    $.each(possibleWins, function(index, value) {
      if($.inArray(squareIndex, value) > -1) {
        possibleCombos.push(value);
      }
    });
    return possibleCombos;
  };

  squares.click(function() {
    var square = $(this);
    var squareIndex = squares.index(square);

    // fill in the square with an X if it's open
    if(square.text() == "") {
      square.text(X);
      var possibleCombos = getPossibleCombosForSelection(squareIndex);
    } else {
      info.text("That space is occupied by an " + square.text() + ".");
    }

    // see if O can win, if so, place O and win
    
    // see if X can be blocked, if so, block it with O

    // if X picks the middle, put O in a corner

    // if X picks a corner, put O in the center
    if(squareIndex in CORNER_SQUARES) {
      squares.eq(CENTER_SQUARE).text(O);
    }

    // put O in a side (1, 3, 5, 7)

    // go through X's next possible plays, and put an O on the first available square
  });
});
