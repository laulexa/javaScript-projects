let playerId = null
let opponentId = null
let mokepones = [];
let mokeponesOpponents = [];
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
let buddyPlayerObject
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
let layout = map.getContext("2d")
let interval
let backgroundMap = new Image()
backgroundMap.src = './assets/mokemap.png'
let heightNeeded
let mapWidth = window.innerWidth - 20
const maxWidthMap = 350

if(mapWidth > maxWidthMap) {
   mapWidth = maxWidthMap - 20
}

heightNeeded = mapWidth * 600 / 800
mapa.width = mapWidth
mapa.height = heightNeeded

class Mokepon {
   constructor (name, picture, lives, fotoMapa, id = null) {
      this.id = id
      this.name = name
      this.picture = picture
      this.lives = lives
      this.attacks = []
      this.width = 40
      this.height = 40
      this.x = randomNumber(0, mapa.width - this.width)
      this.y = randomNumber(0, mapa.height - this.height)
      this. pictureMap = new Image()
      this.pictureMap.src = fotoMapa
      this.speedX = 0
      this.speedY = 0
   }
   drawMokepon() {
      layout.drawImage (
         this.pictureMap,
         this.x,
         this.y,
         this.width,
         this.height
       )
   }
}

let hipodoge = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png')
let capipepo = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png')
let ratigueya = new Mokepon ("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png", 3, './assets/ratigueya.png');
let langostelvis = new Mokepon ("Langostelvis","./assets/mokepons_mokepon_capipepo_attack.png", 3, './assets/capipepo.png');
let tucapalma = new Mokepon ("Tucapalma","./assets/mokepons_mokepon_capipepo_attack.png", 3, './assets/capipepo.png');
let pydos = new Mokepon ("Pydos","./assets/mokepons_mokepon_capipepo_attack.png", 3, './assets/capipepo.png');

const HIPODOGE_ATTACKS = [
   {name: '💧', id: "water-btn"},
   {name: '💧', id: "water-btn"},
   {name: '💧', id: "water-btn"},
   {name: '🔥', id: "fire-btn"},
   {name: '🌱', id: "ground-btn"},
]

   hipodoge.attacks.push(...HIPODOGE_ATTACKS)

const CAPIPEPO_ATTACKS = [
   {name: '🌱', id: "ground-btn"},
   {name: '🌱', id: "ground-btn"},
   {name: '🌱', id: "ground-btn"},
   {name: '💧', id: "water-btn"},
   {name: '🔥', id: "fire-btn"},
]
   
   capipepo.attacks.push(...CAPIPEPO_ATTACKS)
  
const RATIGUEYA_ATTACKS = [
   {name: '🔥', id: "fire-btn"},
   {name: '🔥', id: "fire-btn"},
   {name: '🔥', id: "fire-btn"},
   {name: '💧', id: "water-btn"},
   {name: '🌱', id: "ground-btn"},
]

   ratigueya.attacks.push(...RATIGUEYA_ATTACKS)
   
const LANGOSTELVIS_ATTACKS = [
   {name: '💧', id: "water-btn"},
   {name: '💧', id: "water-btn"},
   {name: '🔥', id: "fire-btn"},
   {name: '🔥', id: "fire-btn"},
   {name: '🌱', id: "ground-btn"},
]

   langostelvis.attacks.push(...LANGOSTELVIS_ATTACKS)

const TUCAPALMA_ATTACKS = [
   {name: '💧', id: "water-btn"},
   {name: '💧', id: "water-btn"},
   {name: '🌱', id: "ground-btn"},
   {name: '🌱', id: "ground-btn"},
   {name: '🔥', id: "fire-btn"},
]

   tucapalma.attacks.push(...TUCAPALMA_ATTACKS)

const PYDOS_ATTACKS = [
      {name: '🔥', id: "fire-btn"},
      {name: '🔥', id: "fire-btn"},
      {name: '🌱', id: "ground-btn"},
      {name: '🌱', id: "ground-btn"},
      {name: '💧', id: "water-btn"},
]

   pydos.attacks.push(...PYDOS_ATTACKS)

   mokepones.push(hipodoge,capipepo,ratigueya, langostelvis, tucapalma, pydos);
   // console.log(mokepones)

function startGame() {  
   chooseAttack.style.display = 'none';
   sectionMokeponMap.style.display = 'none';

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

    joinTheGame()
}

function joinTheGame() {
   fetch("http://localhost:8080/join")
   .then(function (res) {
      if (res.ok) {
          res.text()
              .then(function (respuesta) {
                  console.log(respuesta)
                  playerId = respuesta
              })
      }
  })
}

function chooseBuddy() {
   console.log("They chose me!")
   chooseBuddySection.style.display = 'none';
     
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

     chooseMokepon(buddyChosen)

   selectAttack(buddyChosen)
   sectionMokeponMap.style.display = 'flex'
   startMap()
}

function chooseMokepon(buddyChosen) {
   fetch(`http://localhost:8080/mokepon/${playerId}`, {
      method: "post",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          mokepon: buddyChosen
      })
  })
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
         if(playerAttack.length === 5) {
            sendAttacks()
         }
      })    
   })
}

function sendAttacks() {
   fetch(`http://localhost:8080/mokepon/${playerId}/attacks`, {
      method: "post",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         attacks: playerAttack
      })
   })
   interval = setInterval(obtainAttacks, 50)
}

function obtainAttacks() {
   fetch(`http://localhost:8080/mokepon/${opponentId}/attacks`)
   .then(function(res) {
      if(res.ok) {
         res.json()
            .then(function({ attacks }) {
               if(attacks.length === 5) {
                  opponentAttack = attacks
                  battle()
               }
            })
      }
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

// function opponentRandomAttack() {
//    let randomBuddyAttack = randomNumber(0,opponentMokeponAttacks.length -1) 
//    if(randomBuddyAttack == 0 || randomBuddyAttack == 1) {
//       opponentAttack.push("FIRE")
//    } else if (randomBuddyAttack == 3 || randomBuddyAttack == 4) {
//       opponentAttack.push("WATER")
//    } else {
//       opponentAttack.push("GROUND")
//    }
//    console.log(opponentAttack)
//    startFight() 
// }

// function startFight() {
//    if(playerAttack.length === 5) {
//       battle()
//    }
// }

function bothOpponentsIndex(player, opponent) {
   playerAttackIndex = playerAttack[player]
   opponentAttackIndex = opponentAttack[opponent]
}

function battle () {
   clearInterval(interval)

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

function drawCanvas(){
   
   buddyPlayerObject.x = buddyPlayerObject.x + buddyPlayerObject.speedX
   buddyPlayerObject.y = buddyPlayerObject.y + buddyPlayerObject.speedY
   layout.clearRect(0, 0, mapa.width, mapa.height)
    layout.drawImage(
        backgroundMap,
        0,
        0,
        mapa.width,
        mapa.height
    )
      buddyPlayerObject.drawMokepon()

      sendPosition(buddyPlayerObject.x, buddyPlayerObject.y)

      mokeponesOpponents.forEach(function (mokepon){
         mokepon.drawMokepon()
         checkCollision(mokepon)
      })
   }

   function sendPosition(x, y) {
      fetch(`http://localhost:8080/mokepon/${playerId}/position`, {
         method: "post",
         headers: {
          "Content-Type": "application/json"
         },
         body: JSON.stringify({
           x,
           y 
         })
      })
      .then(function (res) {
         if (res.ok) {
             res.json()
                 .then(function ({ opponents }) {
                  console.log(opponents)
                  mokeponesOpponents =  opponents.map(function (opponent) {
                     let mokeponOpponent = null
                     const mokeponName = opponent.mokepon.name || ""
                     if (mokeponName === 'Hipodoge'){
                        mokeponOpponent = new Mokepon('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png', opponent.id)
                     } else if(mokeponName === 'Capipepo') {
                        mokeponOpponent = new Mokepon('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png', opponent.id)
                     } else if(mokeponName === 'Ratigueya') {
                        mokeponOpponent = new Mokepon ("Ratigueya","./assets/mokepons_mokepon_ratigueya_attack.png", 3, './assets/ratigueya.png', opponent.id)
                     } else if (mokeponName === 'Langostelvis') {
                        mokeponOpponent = new Mokepon ("Langostelvis","./assets/mokepons_mokepon_capipepo_attack.png", 3, './assets/capipepo.png', opponent.id)
                     } else if (mokeponName === 'Tucapalma') {
                        mokeponOpponent = new Mokepon ("Tucapalma","./assets/mokepons_mokepon_capipepo_attack.png", 3, './assets/capipepo.png', opponent.id)
                     } else if (mokeponName === 'Pydos') {
                        mokeponOpponent = new Mokepon ("Pydos","./assets/mokepons_mokepon_capipepo_attack.png", 3, './assets/capipepo.png', opponent.id)
                     }
                     
                     mokeponOpponent.x = opponent.x
                     mokeponOpponent.y = opponent.y

                     return mokeponOpponent
                  })
            })
         }
      })
   }

   function moveUp() {
      buddyPlayerObject.speedY = -5
   }
   function moveDown() {
      buddyPlayerObject.speedY = 5
   }
   function moveRight() {
      buddyPlayerObject.speedX = 5
   }
   function moveLeft() {
      buddyPlayerObject.speedX = -5
   }


   function stopMove() {
      buddyPlayerObject.speedX = 0
      buddyPlayerObject.speedY = 0
   }

function pressAKey(event) {
   console.log(event.key)
   switch(event.key) {
      case 'ArrowUp':
         moveUp()
         break
      case 'ArrowDown':
         moveDown()
         break
      case 'ArrowLeft':
         moveLeft()
         break
      case 'ArrowRight':
         moveRight()
         break
      default:
         break
   }
}

function startMap() {
   buddyPlayerObject = getBuddyObject(buddyChosen)
   // map.width = 320
   // map.height = 240

   interval = setInterval(drawCanvas, 50)
 
    window.addEventListener('keydown', pressAKey)
    window.addEventListener('keyup', stopMove)
}

function getBuddyObject() {
   for(let i = 0; i < mokepones.length; i++) {
      if(buddyChosen === mokepones[i].name) {
         return mokepones[i]
      }
   }
}

function checkCollision(opponent) {

   const arribaEnemigo = 
         opponent.y
   const abajoEnemigo = 
         opponent.y + opponent.height
   const derechaEnemigo = 
         opponent.x + opponent.width
   const izquierdaEnemigo = 
         opponent.x 

   const arribaMascota = 
         buddyPlayerObject.y
   const abajoMascota = 
         buddyPlayerObject.y + buddyPlayerObject.height
   const derechaMascota = 
         buddyPlayerObject.x + buddyPlayerObject.width
   const izquierdaMascota = 
         buddyPlayerObject.x 

   if(
      abajoMascota < arribaEnemigo ||
      arribaMascota > abajoEnemigo ||
      derechaMascota < izquierdaEnemigo ||
      izquierdaMascota > derechaEnemigo
  ) {
      return
  }
  stopMove()
  clearInterval(interval)

  opponentId = opponent.id
  chooseAttack.style.display = 'flex';
  sectionMokeponMap.style.display = 'none'
  randomOpponentBuddy(opponent)
//   alert("There was a collision " + opponent.name)
}

window.addEventListener("load", startGame)// para que no importe la posicion de la etiqueta script en el html
