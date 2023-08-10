var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

function nextSequence() {
  userClickedPattern = [];
  level++;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  var element = $("#" + randomChosenColor);
  var h1Element = $("#level-title");

  // change header title
  h1Element.text("Level " + level);

  // add effects
  element.fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  // push to array
  gamePattern.push(randomChosenColor);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

$(".btn").click(function () {
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
});

$(document).on("keydown", function () {
  console.log("started = " + started);
  if (!started) {
    nextSequence();
    started = true;
  }
});

function animatePress(currentColor) {
  var element = $("#" + currentColor);
  element.addClass("pressed");
  setTimeout(function () {
    element.removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var soundFile = "./sounds/" + name + ".mp3";
  var audio = new Audio(soundFile);
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
