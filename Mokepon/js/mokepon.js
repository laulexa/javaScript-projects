let playerAttack;
let opponentAttack;
let gameResult;
let playerLives = 3;
let opponentLives = 3;

function startGame() {
   let chooseAttack = document.getElementById("choose-attack");
   chooseAttack.style.display = 'none';

    let chooseBuddyBtn = document.getElementById("choose-buddy-btn");
    chooseBuddyBtn.addEventListener("click", chooseBuddy);
    
    let restartGameSection = document.getElementById('restart');
    restartGameSection.style.display = "none";

    let fireBtn = document.getElementById("fire-btn");
    fireBtn.addEventListener ("click", fireAttack);
    let waterBtn = document.getElementById("water-btn");
    waterBtn.addEventListener ("click", waterAttack);
    let groundBtn = document.getElementById("ground-btn");
    groundBtn.addEventListener ("click", groundAttack);

    let restartButton = document.getElementById("restart-btn");
    restartButton.addEventListener("click", restartGame)
}

function chooseBuddy() {
   let chooseAttack = document.getElementById("choose-attack");
    chooseAttack.style.display = 'block';

    let chooseBuddySection = document.getElementById("choose-buddy-section");
   chooseBuddySection.style.display = 'none';

    let hipodoge = document.getElementById("hipodoge")
    let capipepo = document.getElementById("capipepo")
    let ratigueya = document.getElementById("ratigueya")
    let langostelvis = document.getElementById("langostelvis")
    let tucapalma = document.getElementById("tucapalma")
    let pydos = document.getElementById("pydos")
    let spanBuddyPlayer = document.getElementById("buddy-player")

     if(hipodoge.checked == true) {
        spanBuddyPlayer.innerHTML = "hipodogue";   
     } else if(capipepo.checked == true){     
        spanBuddyPlayer.innerHTML = "capipepo";
     } else if(ratigueya.checked == true){      
        spanBuddyPlayer.innerHTML = "ratigueya";
     } else if(langostelvis.checked == true){     
        spanBuddyPlayer.innerHTML = "langostelvis";
     } else if(tucapalma.checked == true){      
        spanBuddyPlayer.innerHTML = "tucapalma";
     } else if(pydos.checked == true){
        spanBuddyPlayer.innerHTML = "pydos";
     } else {
      console.log("you have to select one option")
     }

     randomOpponentBuddy()

}

function randomOpponentBuddy() {
   let randomAttack = randomNumber(1,6) 
   console.log(randomAttack)
   let spanBuddyOpponent = document.getElementById("buddy-opponent")
   if(randomAttack == 1) {
      spanBuddyOpponent.innerHTML = "hipodogue";
   } else if(randomAttack == 2) {
      spanBuddyOpponent.innerHTML = "capipepo";
   } else if(randomAttack == 3) {
      spanBuddyOpponent.innerHTML = "ratigueya";
   } else if(randomAttack == 4) {
      spanBuddyOpponent.innerHTML = "langostelvis";
   } else if(randomAttack == 5) {
      spanBuddyOpponent.innerHTML = "tucapalma";
   } else if(randomAttack == 6) {
      spanBuddyOpponent.innerHTML = "pydos";
}
}

function randomNumber(min,max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}

function fireAttack () {
   console.log("fire attack")
   playerAttack = "FIRE"
   opponentRandomAttack()
}

function waterAttack () {
   console.log("water attack")
   playerAttack = "WATER"
   opponentRandomAttack()
}

function groundAttack () {
   console.log("ground attack")
   playerAttack = "GROUND"
   opponentRandomAttack()
}

function opponentRandomAttack() {
   let randomBuddyAttack = randomNumber(1,3) 
   if(randomBuddyAttack == 1) {
      opponentAttack = "FIRE"
   } else if (randomBuddyAttack == 2) {
      opponentAttack = "WATER"
   } else if (randomBuddyAttack == 3) {
      opponentAttack = "GROUND"
   }
   battle()
}

function battle () {
   let spanPlayerLives = document.getElementById("player-lives");
   let spanOpponentLives = document.getElementById("opponent-lives");
  
   if(playerAttack == opponentAttack) {
      createMessage("TIED 🤦🏽‍♀️")
   } else if(playerAttack == "WATER" && opponentAttack == "FIRE") {
      createMessage("WIN 🏆");
      opponentLives--
      spanOpponentLives.innerHTML = opponentLives;
   } else if(playerAttack == "WATER" && opponentAttack == "GROUND") {
      createMessage("WIN 🏆 ")
      opponentLives--
      spanOpponentLives.innerHTML = opponentLives;
   } else if(playerAttack == "GROUND" && opponentAttack == "FIRE") {
      createMessage("WIN 🏆")
      opponentLives--
      spanOpponentLives.innerHTML = opponentLives;
   } else {
      createMessage("LOST 😩")
      playerLives--
      spanPlayerLives.innerHTML = playerLives;
   }
   checkGameLives()
}

function checkGameLives() {
   if(playerLives == 0) {
      console.log("Que paso")
      createFinalMessage("You lost the game 😫")
   } else if(opponentLives == 0) {
      createFinalMessage("You Won the game! 😃")
   } 
}

function createMessage(result) {
   let sectionMessages = document.getElementById("mensajes");
   let paragraph = document.createElement('p');
   paragraph.innerHTML = "Your buddy chose: " + playerAttack + ", and your opponent chose: " + opponentAttack + " - You " + result;
   sectionMessages.appendChild(paragraph)
}

function createFinalMessage(finalResult) {
   let sectionMessages = document.getElementById("mensajes");
   let paragraph = document.createElement('p');
   paragraph.innerHTML = finalResult;
   sectionMessages.appendChild(paragraph)

   let fireBtn = document.getElementById("fire-btn");
   fireBtn.disabled = true
   let waterBtn = document.getElementById("water-btn");
   waterBtn.disabled = true
   let groundBtn = document.getElementById("ground-btn");
   groundBtn.disabled = true

   let restartGameSection = document.getElementById('restart');
   restartGameSection.style.display = "block";
}

function restartGame() {
   location.reload()
   
}

window.addEventListener("load", startGame)// para que no importe la posicion de la etiqueta script en el html
