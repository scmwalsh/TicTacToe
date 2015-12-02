$(document).ready(function() {

  var winningCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [3, 5, 7], [1, 5, 9]];
  var turn = 1;

  $('td').on('click', function() {
      if (turn % 2 == 0) {
          $(this).html('X');
      } else {
          $(this).html('O');
      }
      this.classList.add("active");
      // check for winner
      checkForWinner();
      $(this).off('click');
      turn ++;
  });

  function checkForWinner(){
      for (var i = winningCombos.length - 1; i >= 0; i--) {
        var combo = winningCombos[i];
        var firstMove = $("#c-" + combo[0]).text();
        var secondMove = $("#c-" + combo[1]).text();
        var thirdMove = $("#c-" + combo[2]).text();
        if (firstMove !="" && firstMove === secondMove && secondMove === thirdMove){
            console.log("Winner")
            gameEnd();
            alert(firstMove + " Wins!")
            return;
          };

      };  
      checkForTieGame();
  };

  function gameEnd(){
    $('td').off('click');
  };

  function checkForTieGame(){
    if (turn >= 9) {
      console.log("tie game")
      alert("Tie Game!")
    };
  };
});
