console.log("hello");
var you = 0;
var compScore = 0;
var youScore = 0;

var ques = prompt("Do you want to play this game?");
while (true) {
  var computer = Math.floor(Math.random() * 3);
  if (ques == "yes") {
    alert("Welcome to the stone paper scissor game!!");
    var a = prompt("choose one");
  } else {
    alert("OKAY!! You can quit this game!!");
    break;
  }
  if (a == "stone") {
    you = 0;
  } else if (a == "paper") {
    you = 1;
  } else if (a == "scissor") {
    you = 2;
  } else {
    alert("Choose again")
    var a = prompt("choose one");
  }
  if (computer == 0) {
    alert("Computer choose Stone");
  } else if (computer == 1) {
    alert("Computer choose Paper");
  } else if (computer == 2) {
    alert("Computer choose scissor");
  }

  if (you == 0) {
    if (computer == 0) {
      alert("Tie!!");
    } else if (computer == 1) {
      alert("computer win");
      compScore = compScore + 1;
    } else if (computer == 2) {
      alert("You win");
      youScore = youScore + 1;
    }
  } else if (you == 1) {
    if (computer == 0) {
      alert("you win");
      youScore = youScore + 1;
    } else if (computer == 1) {
      alert("tie");
    } else if (computer == 2) {
      alert("computer win");
      compScore = compScore + 1;
    }
  } else if (you == 2) {
    if (computer == 0) {
      alert("computer win");
      compScore = compScore + 1;
    } else if (computer == 1) {
      alert("You win");
      youScore = youScore + 1;
    } else if (computer == 2) {
      alert("Tie");
    }
  }
  alert("Computer: " + compScore + " You: " + youScore);
  if (compScore == 2 && youScore == 1) {
    alert("Computer win");
    break;
  } else if (compScore == 1 && youScore == 2) {
    alert("You win");
    break;
  } else if (compScore == 3 && youScore == 0) {
    alert("Computer win")
  } else if (compScore == 0 && youScore == 3) {
    alert("You win")
  }
}
