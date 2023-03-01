let playerAttack;
let opponentAttack;
let gameResult;

function startGame() {
    let chooseBuddyBtn = document.getElementById("choose-buddy-btn");
    chooseBuddyBtn.addEventListener("click", chooseBuddy);
    
    let fireBtn = document.getElementById("fire-btn");
    fireBtn.addEventListener ("click", fireAttack);
    let waterBtn = document.getElementById("water-btn");
    waterBtn.addEventListener ("click", waterAttack);
    let groundBtn = document.getElementById("ground-btn");
    groundBtn.addEventListener ("click", groundAttack);
}

function chooseBuddy() {
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
   // Hipodoge -> Water
   // Capipepo -> ground
   // Ratigueya -> fire
   // Langostelvis -> fire and water
   // Tucapalma -> ground and water
   // Pydos -> ground and fire

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

function createMessage() {
   let sectionMessages = document.getElementById("mensajes");
   let paragraph = document.createElement('p');
   paragraph.innerHTML = "Your buddy chose: " + playerAttack + ", and your opponent chose: " + opponentAttack + " - You " + gameResult;
   sectionMessages.appendChild(paragraph)
}

function battle () {
   if(playerAttack == opponentAttack) {
      gameResult = "TIED 🤦🏽‍♀️"
   } else if(playerAttack == "FIRE" && opponentAttack == "WATER") {
      gameResult = "LOST 😩"
   } else if(playerAttack == "FIRE" && opponentAttack == "GROUND") {
      gameResult = "LOST 😩"
   }  else if(playerAttack == "WATER" && opponentAttack == "FIRE") {
      gameResult = "WIN 🏆"
   } else if(playerAttack == "WATER" && opponentAttack == "GROUND") {
      gameResult = "WIN 🏆 "
   }  else if(playerAttack == "GROUND" && opponentAttack == "WATER") {
      gameResult = "LOST 😩"
   } else if(playerAttack == "GROUND" && opponentAttack == "FIRE") {
      gameResult = "WIN 🏆"
   } else {
      gameResult = "A RESULT IS MISSING"
   }
   createMessage()
}

window.addEventListener("load", startGame)// para que no importe la posicion de la etiqueta script en el html

//game-result