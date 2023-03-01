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
     if(hipodoge.checked == true) {
        console.log("hipodogue!")
     } else if(capipepo.checked == true){
        console.log("capipepo")
     } else if(ratigueya.checked == true){
        console.log("ratigueya")
     } else if(langostelvis.checked == true){
        console.log("langostelvis")
     } else if(tucapalma.checked == true){
        console.log("tucapalma")
     } else if(pydos.checked == true){
        console.log("pydos")
     }
}

window.addEventListener("load", startGame)// para que no importe la posicion de la etiqueta script en el html