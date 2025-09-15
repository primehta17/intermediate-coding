function blackjackWinner(player1, player2) {
  let play1 = player1[0] + player1[1];
  let play2 = player2[0] + player2[1];
  for (let i = 0; i < player1.length; i++) {
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

function blackjackWinnerifcond(player1, player2) {
  let play1 = player1[0] + player1[1];
  let play2 = player2[0] + player2[1];
  if (play1 > 21 && play2 > 21) {
    return "Draw"; // both bust
  } else if (play1 > 21) {
    return "Player2"; // player1 bust
  } else if (play2 > 21) {
    return "Player1"; // player2 bust
  } else if (play1 === play2) {
    return "Draw";
  } else if (play1 > play2) {
    return "Player1";
  } else {
    return "Player2";
  }
}
console.log(blackjackWinnerifcond([11, 11], [4, 5]));
console.log(blackjackWinnerifcond([10, 11], [9, 11]));
