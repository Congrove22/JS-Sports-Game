let reset = document.querySelector("#reset-button");
let highlandersAttempt = document.querySelector("#teamone-numshots");
let countHighlander = 0;
let countHighlanderGoal = 0;
let shamrocksAttempt = document.querySelector("#teamtwo-numshots");
let countShamrock = 0;
let countShamrockGoal = 0;
let countReset = 0;

let highlanderGoal = document.querySelector("#teamone-numgoals");
let highlanderShotsAttempted = document.querySelector("#teamone-numshots");
let highLanderShootButton = document.querySelector("#teamone-shoot-button");
highLanderShootButton.addEventListener("click", function () {
  countHighlander += 1;
  highlanderShotsAttempted.innerHTML = countHighlander;
  if (Math.random() > 0.25) {
    countHighlanderGoal += 1;
    highlanderGoal.innerHTML = countHighlanderGoal;
    console.log(highlanderShotsAttempted);
  }
});

let shamrockGoal = document.querySelector("#teamtwo-numgoals");
let shamrockShotsAttempted = document.querySelector("#teamtwo-numshots");
let shamrockShootButton = document.querySelector("#teamtwo-shoot-button");
shamrockShootButton.addEventListener("click", function () {
  countShamrock += 1;
  shamrockShotsAttempted.innerHTML = countShamrock;
  if (Math.random() > 0.25) {
    countShamrockGoal += 1;
    shamrockGoal.innerHTML = countShamrockGoal;
  }
});

let numberOfResets = document.querySelector("#num-resets");
reset.addEventListener("click", function () {
  countHighlander = 0;
  highlanderGoal = 0;
  highlanderGoal.innerHTML = 0;
  highlanderShotsAttempted.innerHTML = 0;
  countShamrock = 0;
  shamrockGoal = 0;
  shamrockGoal.innerHTML = 0;
  shamrockShotsAttempted.innerHTML = 0;
  countReset += 1;
  numberOfResets.innerHTML = countReset;
});
