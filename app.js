"use strict";

console.log("this works");

// declare variables for buttons and counts

const buttonContainer = document.querySelector("section .button-container");

const passBtn = document.getElementById("button-one");
const shootBtn = document.getElementById("button-two");
const dribbleBtn = document.getElementById("button-three");

// Initialize counts from local storage

const passCount = parseInt(localStorage.getItem("passCount")) || 0;
const shootCount = parseInt(localStorage.getItem("shootCount")) || 0;
const dribbleCount = parseInt(localStorage.getItem("dribbleCount")) || 0;
const scoreCount = parseInt(localStorage.getItem("scoreCount")) || 0;

// let clicks = 0;

let allData = [];

// shotVsOneDef = [];

// function getRandomNumber() {
//     return Math.floor(Math.random() * 10);
//   }

function getRandomDefenders() {
  return Math.floor(Math.random() * 3);
}
function getRandomTeammates() {
  return Math.floor(Math.random() * 2);
}

let allEncounters = [];

// Display encounter details(prototype )

function Encounter(defenders, teammates) {
  const encounterElement = document.getElementById("play-window");
  this.defenders = getRandomDefenders();
  this.teammates = getRandomTeammates();
  encounterElement.textContent = `Defenders: ${this.defenders}, Teammates: ${this.teammates}`;
  this.passCount = 0;
  this.shootCount = 0;
  this.dribbleCount = 0;
  this.scoreCount = 0;
  allEncounters.push(this);
  //   displayEncounter();
}

let encounter1 = new Encounter();
let encounter2 = new Encounter();
let encouter3 = new Encounter();

console.log(allEncounters);

// Update counts in the results table

function updateCounts() {
  passCount.textContent = passCount;
  shootCount.textContent = shootCount;
  dribbleCount.textContent = dribbleCount;
  scoreCount.textContent = scoreCount;
}

passBtn.addEventListener("click", handlePassBtn);

function handlePassBtn(event) {
  if (defenders > teammates) {
    return "Intercepted (fail)";
  } else if (teammates > defenders) {
    return "Successful pass";
  } else if (teammates === 0) {
    return "Out of play (fail)";
  }
}

console.log(handlePassBtn);

// Handle pass action

// passBtn.addEventListener("click", handlePassBtn);

// Perform pass logic and determine outcome

// if there are more defenders than team mates = intercepted... if there are more team mates thand defender = good pass... else if there are no team mates = out of play

// function handlePassBtn(event){
//     if (

//     )
// }

// Increment pass count and update table

// Save pass count to local storage

// Handle shoot action

// Perform shoot logic and determine outcome

// Increment shoot count and update table

// Save shoot count to local storage

// Handle dribble action

// Perform game logic and determine outcome

// Increment dribble count and update table

// Save dribble count to local storage

// Retrieve counts from local storage on page load

// function Game(name, src) {
//   this.name = name;
//   this.src = this.src;
//   this.clicks = 0;
// }

// function handleOptionClick(event) {
//   if (event.target === buttonContainer) {
//     alert("you missed the button, hit the button");
//   }
// }

// buttonContainer.addEventListener("click", handleOptionClick);

// Kitten.prototype.render = function () {
//     // get the container for our kitten profile cards
//     const containerElement = document.getElementById("kittenProfiles");

//     // each Kitten profile is an article
//     const article = document.createElement("article");
//     containerElement.appendChild(article);

//     // add the article heading
//     const h3 = document.createElement("h3");
//     h3.textContent = this.name;
//     article.appendChild(h3);

//     // add a bio with kitten age
//     const p = document.createElement("p");
//     p.textContent = `${this.name} is adorable and is ${this.age} old.`;
//     article.appendChild(p);
