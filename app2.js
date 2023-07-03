"use strict";

const buttonContainer = document.querySelector("section .button-container");

const passBtn = document.getElementById("button-one");
const shootBtn = document.getElementById("button-two");
const dribbleBtn = document.getElementById("button-three");

// Initialize counts from local storage

let passCount = parseInt(localStorage.getItem("passCount")) || 0;
let shootCount = parseInt(localStorage.getItem("shootCount")) || 0;
let dribbleCount = parseInt(localStorage.getItem("dribbleCount")) || 0;
let scoreCount = parseInt(localStorage.getItem("scoreCount")) || 0;

let currentEncounter = 1;
const totalEncounters = 3;

function getRandomDefenders() {
  return Math.floor(Math.random() * 3);
}

function getRandomTeammates() {
  return Math.floor(Math.random() * 2);
}

function displayEncounter(defenders, teammates) {
  const encounterElement = document.getElementById("play-window");
  defenders = getRandomDefenders();
  teammates = getRandomTeammates();
  encounterElement.textContent = `Defenders: ${defenders}, Teammates: ${teammates}`;
}

function nextEncounter() {
  if (currentEncounter < totalEncounters) {
    currentEncounter++;
    displayEncounter();
  } else {
    console.log("out of retries");
  }
}

function firstEncounter() {
  const defenders = getRandomDefenders();
  const teammates = getRandomTeammates();

  displayEncounter(defenders, teammates);
}

passBtn.addEventListener("click", function () {
  const defenders = getRandomDefenders();
  const teammates = getRandomTeammates();

  displayEncounter(defenders, teammates);

  if (defenders === 0 && teammates === 0) {
    // Fail condition
    console.log("Fail: 0 defenders, 0 teammates");
  } else if (defenders === 1 && teammates === 0) {
    // Fail condition
    console.log("Fail: 1 defender, 0 teammates");
  } else if (defenders === 2 && teammates === 0) {
    // Fail condition
    console.log("Fail: 2 defenders, 0 teammates");
  } else if (defenders === 0 && teammates === 1) {
    // Success condition
    console.log("Success: 0 defenders, 1 teammate");
  } else if (defenders === 1 && teammates === 1) {
    // Success condition
    console.log("Success: 1 defender, 1 teammate");
  } else if (defenders === 2 && teammates === 1) {
    // Fail condition
    console.log("Fail: 2 defenders, 1 teammate");
  }

  passCount++;

  localStorage.setItem("passCount", passCount);

  nextEncounter();
});

shootBtn.addEventListener("click", function () {
  const outcome = Math.random() < 0.5 ? "Success" : "Fail";
  console.log("Shoot outcome:", outcome);

  shootCount++;

  localStorage.setItem("shootCount", shootCount);

  nextEncounter();
});

dribbleBtn.addEventListener("click", function () {
  const defenders = getRandomDefenders();
  const teammates = getRandomTeammates();

  displayEncounter(defenders, teammates);

  if (defenders === 0 && teammates === 0) {
    // Success condition
    console.log("Success: 0 defenders, 0 teammates");
  } else if (defenders === 1 && teammates === 0) {
    // Success condition
    console.log("Success: 1 defender, 0 teammates");
  } else if (defenders === 2 && teammates === 0) {
    // Fail condition
    console.log("Fail: 2 defenders, 0 teammates");
  } else if (defenders === 0 && teammates === 1) {
    // Fail condition
    console.log("Fail: 0 defenders, 1 teammate");
  } else if (defenders === 1 && teammates === 1) {
    // Success condition
    console.log("Success: 1 defender, 1 teammate");
  } else if (defenders === 2 && teammates === 1) {
    // Fail condition
    console.log("Fail: 2 defenders, 1 teammate");
  }

  dribbleCount++;

  localStorage.setItem("dribbleCount", dribbleCount);

  nextEncounter();
});

firstEncounter();
