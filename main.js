const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0; // move bird up and down
let hue = 0; //color
let frame = 0; // frame count or animation loop
let score = 0;
let gamespeed = 2;//move obstacles, particles and background at the same speed -> we will use parallax effect which has to be with speed

const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop("0.4", "#fff");
gradient.addColorStop("0.5", "#000");
gradient.addColorStop("0.55", "#4040ff");
gradient.addColorStop("0.6", "#000");
gradient.addColorStop("0.65", "#fff");
//let temp = canvas.height - 90;

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas between every frame of animation
    //ctx.fillRect(10, canvas.height - 90, 50, 50);// this draw a rectangle that will represent our player for now, cordinates 10, 10 and width 50 height 50
    handleObstacle();
    handleParticle();
    bird.update();
    bird.draw();
    ctx.fillStyle = gradient;
    ctx.font = "90px Georgia";
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    handleCollision();
    if(handleCollision()) return;
    requestAnimationFrame(animate); //this will create our animation loop through recursion where a function runs its code and then calls itself from inside of itself over and over again
    angle += 0.12;
    hue++;
    frame++;
}
animate()

window.addEventListener('keydown', function(e) {
    console.log(e.code);
    if(e.code === 'Space') spacePressed = true;  
});
window.addEventListener('keyup', function(e) {
    console.log(e.code);
    if(e.code === 'Space') spacePressed = false;  
});

const bang = new Image();
bang.src = 'bang.png'
function handleCollision() {
    for(let i = 0; i < obstaclesArray.length; i++) {
        if(bird.x < obstaclesArray[i].x + obstaclesArray[i].width && 
            bird.x + bird.width > obstaclesArray[i].x &&
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) || 
            (bird.y > canvas.height - obstaclesArray[i].bottom && 
                bird.y + bird.height < canvas.height))) {
                    //collision detected
                    ctx.drawImage(bang, bird.x, bird.y, 50, 50);
                    ctx.font = "25px Georgia";
                    ctx.fillStyle = 'black';
                    ctx.fillText('Game Over, your score is ' + score, 160, canvas.height/2 - 10);
                    return true;
                }
    }
}



