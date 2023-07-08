function rollDice(max) {
  return Math.floor(Math.random() * max) + 1;
}

function changeImg() {
  var diceNum;
  var diceImg;
  var img = document.querySelectorAll("img");
  var diceRoll = [];

  for (let i = 0; i < img.length; i++) {
    diceNum = rollDice(6);
    diceRoll.push(diceNum);
    diceImg = "./images/dice" + diceNum + ".png";
    img[i].setAttribute("src", diceImg);
  }

  return diceRoll;
}

function startRoll() {
  const diceRolls = changeImg();
  var user1 = diceRolls[0];
  var user2 = diceRolls[1];

  if (user1 == user2) {
    document.querySelector("h1").innerHTML = "Draw !";
  } else if (user1 > user2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
  }
}

startRoll();
