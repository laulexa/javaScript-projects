const chooseAttack = document.getElementById("choose-attack");
const restartGameSection = document.getElementById('restart');
const chooseBuddyBtn = document.getElementById("choose-buddy-btn");
const restartButton = document.getElementById("restart-btn");
restartGameSection.style.display = "none"; 

const chooseBuddySection = document.getElementById("choose-buddy-section");
const spanBuddyPlayer = document.getElementById("buddy-player");
const spanBuddyOpponent = document.getElementById("buddy-opponent");

const spanPlayerLives = document.getElementById("player-lives");
const spanOpponentLives = document.getElementById("opponent-lives");

const sectionMessages = document.getElementById("result");
const playerAttacks = document.getElementById("player-attacks");
const opponentAttacks = document.getElementById("opponent-attacks");

const cardsContainer = document.getElementById("cards-container");

const attackContainer = document.getElementById("attack-container");

const sectionMokeponMap = document.getElementById("mokepon-map");
const myMap = document.getElementById("map");
