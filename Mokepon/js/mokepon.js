let mokepones = [];
let playerAttack;
let opponentAttack;
let mokeponOptions;
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let playerLives = 3;
let opponentLives = 3;

class Mokepon {
   constructor (name, picture, lives) {
      this.name = name
      this.picture = picture
      this.lives = lives
      this.attacks = []
   }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon ("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png", 3);
let langostelvis = new Mokepon ("Langostelvis","./assets/mokepons_mokepon_capipepo_attack.png", 3);
let tucapalma = new Mokepon ("Tucapalma","./assets/mokepons_mokepon_capipepo_attack.png", 3);
let pydos = new Mokepon ("Pydos","./assets/mokepons_mokepon_capipepo_attack.png", 3);

   hipodoge.attacks.push(
      {name: "WATER 💧", id: "water-btn"},
      {name: "WATER 💧", id: "water-btn"},
      {name: "WATER 💧", id: "water-btn"},
      {name: "FIRE 🔥", id: "fire-btn"},
      {name: "GROUND 🌱", id: "ground-btn"},
   )
   console.log(hipodoge.attacks) 
   capipepo.attacks.push(
      {name: "GROUND 🌱", id: "ground-btn"},
      {name: "GROUND 🌱", id: "ground-btn"},
      {name: "GROUND 🌱", id: "ground-btn"},
      {name: "WATER 💧", id: "water-btn"},
      {name: "FIRE 🔥", id: "fire-btn"},
   )
   console.log(capipepo.attacks) 
   ratigueya.attacks.push(
      {name: "FIRE 🔥", id: "fire-btn"},
      {name: "FIRE 🔥", id: "fire-btn"},
      {name: "FIRE 🔥", id: "fire-btn"},
      {name: "WATER 💧", id: "water-btn"},
      {name: "GROUND 🌱", id: "ground-btn"},
   )
   console.log(ratigueya.attacks) 
   langostelvis.attacks.push(
      {name: "WATER 💧", id: "water-btn"},
      {name: "WATER 💧", id: "water-btn"},
      {name: "FIRE 🔥", id: "fire-btn"},
      {name: "FIRE 🔥", id: "fire-btn"},
      {name: "GROUND 🌱", id: "ground-btn"},
   )
   console.log(langostelvis.attacks) 
   tucapalma.attacks.push(
      {name: "WATER 💧", id: "water-btn"},
      {name: "WATER 💧", id: "water-btn"},
      {name: "GROUND 🌱", id: "ground-btn"},
      {name: "GROUND 🌱", id: "ground-btn"},
      {name: "FIRE 🔥", id: "fire-btn"},
   )
   console.log(tucapalma.attacks) 
   pydos.attacks.push(
      {name: "FIRE 🔥", id: "fire-btn"},
      {name: "FIRE 🔥", id: "fire-btn"},
      {name: "GROUND 🌱", id: "ground-btn"},
      {name: "GROUND 🌱", id: "ground-btn"},
      {name: "WATER 💧", id: "water-btn"},
   )
   console.log(pydos.attacks) 
   mokepones.push(hipodoge,capipepo,ratigueya, langostelvis, tucapalma, pydos);
   console.log(mokepones)

function startGame() {  
   chooseAttack.style.display = 'none';

   mokepones.forEach((mokepon) => {
      mokeponOptions = `
      <input type="radio" name="buddy" id=${mokepon.name} />
         <label class="game-card" for=${mokepon.name} >
            <p>${mokepon.name}</p>
            <img src=${mokepon.picture} alt=${mokepon.name}>
         </label>
         `
   cardsContainer.innerHTML += mokeponOptions

      inputHipodoge = document.getElementById("Hipodoge")
      inputCapipepo = document.getElementById("Capipepo")
      inputRatigueya = document.getElementById("Ratigueya")
      inputLangostelvis = document.getElementById("Langostelvis");
      inputTucapalma = document.getElementById("Tucapalma");
      inputPydos = document.getElementById("Pydos");
   })
   
   console.log(inputCapipepo)

    chooseBuddyBtn.addEventListener("click", chooseBuddy);
    
    //restartGameSection.style.display = "none"; //ojo
    fireBtn.addEventListener ("click", fireAttack);    
    waterBtn.addEventListener ("click", waterAttack);    
    groundBtn.addEventListener ("click", groundAttack);
  
    restartButton.addEventListener("click", restartGame)
}

function chooseBuddy() {
   console.log("They chose me!")
   chooseBuddySection.style.display = 'none';
    chooseAttack.style.display = 'flex';
   
    if (inputHipodoge.checked) {
        spanBuddyPlayer.innerHTML = inputHipodoge.id;   
     } else if(inputCapipepo.checked){     
        spanBuddyPlayer.innerHTML = inputCapipepo.id;
     } else if(inputRatigueya.checked){      
        spanBuddyPlayer.innerHTML = inputRatigueya.id;
     } else if(inputLangostelvis.checked){     
        spanBuddyPlayer.innerHTML = inputLangostelvis.id;
     } else if(inputTucapalma.checked){      
        spanBuddyPlayer.innerHTML = inputTucapalma.id;
     } else if(inputPydos.checked){
        spanBuddyPlayer.innerHTML = inputPydos.id;
     } else {
      console.log("you have to select one option")
     }
     randomOpponentBuddy()
}

function randomOpponentBuddy() {
   let randomBuddy = randomNumber(0 ,mokepones.length - 1) 
   console.log(randomBuddy);

   spanBuddyOpponent.innerHTML = mokepones[randomBuddy].name
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
   //let notification = document.createElement('p');
   let newPlayerAttack = document.createElement('p');
   let newOpponentAttack = document.createElement('p');

   sectionMessages.innerHTML = result;
   newPlayerAttack.innerHTML = playerAttack;
   newOpponentAttack.innerHTML = opponentAttack;
   // let paragraph = document.createElement('p');
   // paragraph.innerHTML = "Your buddy chose: " + playerAttack + ", and your opponent chose: " + opponentAttack + " - You " + result;
   //sectionMessages.appendChild(notification);
   playerAttacks.appendChild(newPlayerAttack);
   opponentAttacks.appendChild(newOpponentAttack);
}

function createFinalMessage(finalResult) {
   sectionMessages.innerHTML = finalResult;
   fireBtn.disabled = true
   waterBtn.disabled = true
   groundBtn.disabled = true
   restartGameSection.style.display = "block";
}

function restartGame() {
   location.reload()
   
}

window.addEventListener("load", startGame)// para que no importe la posicion de la etiqueta script en el html
