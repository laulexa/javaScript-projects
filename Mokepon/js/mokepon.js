function startGame() {
    let chooseBuddyBtn = document.getElementById("choose-buddy-btn");
    chooseBuddyBtn.addEventListener("click", chooseBuddy);
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

window.addEventListener("load", startGame)// para que no importe la posicion de la etiqueta script en el html