const buttonColors = ["red", "blue", "green", "yellow"];
const gamePatten = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  var element = $("#" + randomChosenColor);

  // add effects
  element.fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  // push to array
  gamePatten.push(randomChosenColor);
}

function playSound(name) {
  var soundFile = "./sounds/" + name + ".mp3";
  var audio = new Audio(soundFile);
  audio.play();
}

nextSequence();
