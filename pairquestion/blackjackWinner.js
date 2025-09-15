function blackjackWinner(player1, player2) {
  for (let i = 0; i < player1.length; i++) {
    let play1 = player1[i] + player1[i + 1];
    let play2 = player2[i] + player2[i + 1];
    console.log(play1, play2);
    if (play1 === play2) {
      return "Draw";
    } else if (play1 > play2 && play1 <= 21) {
      return "Player1";
    } else {
      return "Player2";
    }
  }
}
console.log(blackjackWinner([11, 11], [4, 5]));
console.log(blackjackWinner([10, 11], [9, 11]));
