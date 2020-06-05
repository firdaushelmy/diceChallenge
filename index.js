function gameStart() {
  numberGenerator1()
  numberGenerator2()
  winner()
}


function numberGenerator1() {
  var randomNumber1 = (Math.ceil(Math.random() * 6));
  document.querySelector(".img1").setAttribute("src", ("public/images/dice" + [randomNumber1] + ".png"));

  return randomNumber1
}

function numberGenerator2() {
  var randomNumber2 = (Math.ceil(Math.random() * 6));
  document.querySelector(".img2").setAttribute("src", "public/images/dice" + [randomNumber2] + ".png");

  return randomNumber2
}

function winner() {
  var player1 = numberGenerator1();
  var player2 = numberGenerator2();

  if (player1 > player2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
  }
  else if (player1 < player2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
  }
  else {
    document.querySelector("h1").innerHTML = "It's a Draw!"
  }
}

