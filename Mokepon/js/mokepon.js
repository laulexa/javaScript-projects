let mokepones = [];
let playerAttack = [];
let opponentAttack = [];
let mokeponOptions;
let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputLangostelvis
let inputTucapalma
let inputPydos
let buddyChosen
let mokeponAttacks
let opponentMokeponAttacks
let fireBtn  
let waterBtn 
let groundBtn
let buttons = []
let playerAttackIndex
let opponentAttackIndex
let playerWins = 0
let opponentWins = 0
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
      {name: '💧', id: "water-btn"},
      {name: '💧', id: "water-btn"},
      {name: '💧', id: "water-btn"},
      {name: '🔥', id: "fire-btn"},
      {name: '🌱', id: "ground-btn"},
   )
   
   capipepo.attacks.push(
      {name: '🌱', id: "ground-btn"},
      {name: '🌱', id: "ground-btn"},
      {name: '🌱', id: "ground-btn"},
      {name: '💧', id: "water-btn"},
      {name: '🔥', id: "fire-btn"},
   )
  
   ratigueya.attacks.push(
      {name: '🔥', id: "fire-btn"},
      {name: '🔥', id: "fire-btn"},
      {name: '🔥', id: "fire-btn"},
      {name: '💧', id: "water-btn"},
      {name: '🌱', id: "ground-btn"},
   )
   
   langostelvis.attacks.push(
      {name: '💧', id: "water-btn"},
      {name: '💧', id: "water-btn"},
      {name: '🔥', id: "fire-btn"},
      {name: '🔥', id: "fire-btn"},
      {name: '🌱', id: "ground-btn"},
   )
 
   tucapalma.attacks.push(
      {name: '💧', id: "water-btn"},
      {name: '💧', id: "water-btn"},
      {name: '🌱', id: "ground-btn"},
      {name: '🌱', id: "ground-btn"},
      {name: '🔥', id: "fire-btn"},
   )

   pydos.attacks.push(
      {name: '🔥', id: "fire-btn"},
      {name: '🔥', id: "fire-btn"},
      {name: '🌱', id: "ground-btn"},
      {name: '🌱', id: "ground-btn"},
      {name: '💧', id: "water-btn"},
   )

   mokepones.push(hipodoge,capipepo,ratigueya, langostelvis, tucapalma, pydos);
   // console.log(mokepones)

function startGame() {  
   chooseAttack.style.display = 'none';

   mokepones.forEach((mokepon) => {
      mokeponOptions = `
      <input type="radio" name="buddy" id=${mokepon.name} />
         <label class="game-card" for=${mokepon.name} >
            <p>${mokepon.name}</p>
            <img src=${mokepon.picture} alt=${mokepon.name} >
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

    chooseBuddyBtn.addEventListener("click", chooseBuddy);
    
    //restartGameSection.style.display = "none"; //ojo
  
    restartButton.addEventListener("click", restartGame)
}

function chooseBuddy() {
   console.log("They chose me!")
   chooseBuddySection.style.display = 'none';
    chooseAttack.style.display = 'flex';
   
    if (inputHipodoge.checked) {
        spanBuddyPlayer.innerHTML = inputHipodoge.id;
        buddyChosen = inputHipodoge.id;
      } else if(inputCapipepo.checked){     
         spanBuddyPlayer.innerHTML = inputCapipepo.id;
         buddyChosen = inputCapipepo.id;
      } else if(inputRatigueya.checked){      
         spanBuddyPlayer.innerHTML = inputRatigueya.id;
         buddyChosen = inputRatigueya.id;
      } else if(inputLangostelvis.checked){     
         spanBuddyPlayer.innerHTML = inputLangostelvis.id;
         buddyChosen = inputLangostelvis.id;
      } else if(inputTucapalma.checked){      
         spanBuddyPlayer.innerHTML = inputTucapalma.id;
         buddyChosen = inputTucapalma.id;
      } else if(inputPydos.checked){
         spanBuddyPlayer.innerHTML = inputPydos.id;
         buddyChosen = inputPydos.id;
     } else {
      console.log("you have to select one option")
     }
   selectAttack(buddyChosen)
   randomOpponentBuddy()
}
   
function selectAttack(buddyChosen) {
   let attacks
   for(let i = 0; i < mokepones.length; i++) {
      if(buddyChosen === mokepones[i].name) {
         attacks = mokepones[i].attacks
      }
   }
   console.log(attacks)
   displayAttacks(attacks)
}

function displayAttacks(attacks) {
   attacks.forEach((attack) => {
      mokeponAttacks = `
         <button id=${attack.id} class="attack-btn bAttack">${attack.name}</button>
      `
      attackContainer.innerHTML += mokeponAttacks
   })
      fireBtn = document.getElementById("fire-btn");
      waterBtn = document.getElementById("water-btn");
      groundBtn = document.getElementById("ground-btn");
      buttons = document.querySelectorAll(".bAttack");
      console.log(buttons)
}

function attackSequence() {
   buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
         console.log('este es e:', e)
         if(e.target.textContent === '🔥') {
            playerAttack.push('FIRE')
            console.log(playerAttack)
            button.style.background = '#112f58'
            button.disabled = true
         } else if (e.target.textContent === '💧') {
            playerAttack.push('WATER')
            console.log(playerAttack)
            button.style.background = '#112f58'
            button.disabled = true
         } else if (e.target.textContent === '🌱') {
            playerAttack.push('GROUND')
            console.log(playerAttack)
            button.style.background = '#112f58'
            button.disabled = true
         }
         opponentRandomAttack()
      })
      
})
}

function randomOpponentBuddy() {
   let randomBuddy = randomNumber(0 ,mokepones.length - 1) 
   console.log(randomBuddy);

   spanBuddyOpponent.innerHTML = mokepones[randomBuddy].name
   opponentMokeponAttacks = mokepones[randomBuddy].attacks
   attackSequence()
}

function randomNumber(min,max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}

function opponentRandomAttack() {
   let randomBuddyAttack = randomNumber(0,opponentMokeponAttacks.length -1) 
   if(randomBuddyAttack == 0 || randomBuddyAttack == 1) {
      opponentAttack.push("FIRE")
   } else if (randomBuddyAttack == 3 || randomBuddyAttack == 4) {
      opponentAttack.push("WATER")
   } else {
      opponentAttack.push("GROUND")
   }
   console.log(opponentAttack)
   startFight() 
}

function startFight() {
   if(playerAttack.length === 5) {
      battle()
   }
}

function bothOpponentsIndex(player, opponent) {
   playerAttackIndex = playerAttack[player]
   opponentAttackIndex = opponentAttack[opponent]
}

function battle () {
   for(let i = 0; i < playerAttack.length; i++) {
      if(playerAttack[i] == opponentAttack[i]) {
         bothOpponentsIndex(i, i)
         createMessage("TIED 🤦🏽‍♀️")
         // playerWins++
         // spanPlayerLives.innerHTML = playerWins
      } else if(playerAttack[i] == "WATER" && opponentAttack[i] == "FIRE") {
         bothOpponentsIndex(i, i)
         createMessage("WIN 🏆");
         playerWins++
         spanPlayerLives.innerHTML = playerWins
      } else if(playerAttack[i] == "WATER" && opponentAttack[i] == "GROUND") {
         bothOpponentsIndex(i, i)
         createMessage("WIN 🏆 ")
         playerWins++
         spanPlayerLives.innerHTML = playerWins
      } else if(playerAttack[i] == "GROUND" && opponentAttack[i] == "FIRE") {
         bothOpponentsIndex(i, i)
         createMessage("WIN 🏆")
         playerWins++
         spanPlayerLives.innerHTML = playerWins
      } else {
         bothOpponentsIndex(i, i)
         createMessage("LOST 😩")
         opponentWins++
         spanOpponentLives.innerHTML = opponentWins
      }
   }

   checkGameLives()
}

function checkGameLives() {
   if(playerWins === opponentWins) {
      createFinalMessage("TIE!!")
   }  if(playerWins > opponentWins) {
      createFinalMessage("You Won the game! 😃")
   } else {
      createFinalMessage("You lost the game 😫")
   } 
}

function createMessage(result) {
   //let notification = document.createElement('p');
   let newPlayerAttack = document.createElement('p');
   let newOpponentAttack = document.createElement('p');

   sectionMessages.innerHTML = result;
   newPlayerAttack.innerHTML = playerAttackIndex;
   newOpponentAttack.innerHTML = opponentAttackIndex;
   // let paragraph = document.createElement('p');
   // paragraph.innerHTML = "Your buddy chose: " + playerAttack + ", and your opponent chose: " + opponentAttack + " - You " + result;
   //sectionMessages.appendChild(notification);
   playerAttacks.appendChild(newPlayerAttack);
   opponentAttacks.appendChild(newOpponentAttack);
}

function createFinalMessage(finalResult) {
   sectionMessages.innerHTML = finalResult;
   restartGameSection.style.display = "block";
}

function restartGame() {
   location.reload()
   
}

window.addEventListener("load", startGame)// para que no importe la posicion de la etiqueta script en el html
