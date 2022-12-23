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

const background = new Image();
background.src = 'BG.png';
const BG = {
    x1: 0,//represents position on the horizontal x-axis for the first background image
    x2: canvas.width, //represents position on the horizontal x-axis for the second background image. The width will hide it behind the right edge of canvas Y
    y: 0,//vertical position, we want the canvas to start from the top edge, so y will be zero
    width: canvas.width,
    height: canvas.height
} // two backgrounds next to each other and both will be moving left as the game scrolls to the right. As soon as one background moves past the left of the screen, it jumps back behind the right edge, so it's ready to slide left again
function handleBackground() {
    if(BG.x1 <= -BG.width + gamespeed) BG.x1 = BG.width; // if background image 1 scrolled all the way to the left that its entire width is hidden behind the left edge of canvas, quickly move it and hide it behind the right edge of canvas, so we can slide it to the left again. (canvas draws rectangles from the top-left corner and goes to the right bottom corner, which is defined by width and height of that rectangle element. So if I say is X to be the right edge of canvas by saying X is equal to canvas width, the background rectangle is drawn from that point to the right, therefore it is completely hidden behind the right canvas)
    else BG.x1 -= gamespeed; //just move the background one to the left along the x-axis by the mount of pixels defined in game speed variable. so here the background is just endlessly moving to the left unless it is completely hidden behind the left edge at which point it jumps behind the right edge and starts moving left again
    if(BG.x2 <= -BG.width + gamespeed) BG.x2 = BG.width;
    else(BG.x2 -= gamespeed);
    ctx.drawImage(background, BG.x1, BG.y, BG.width, BG.height)
    ctx.drawImage(background, BG.x2, BG.y, BG.width, BG.height)
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // clear the canvas between every frame of animation
    //ctx.fillRect(10, canvas.height - 90, 50, 50);// this draw a rectangle that will represent our player for now, cordinates 10, 10 and width 50 height 50
    handleBackground();
    handleObstacles();
    handleParticles();
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
    bird.frameX = 0;
});

const bang = new Image();
bang.src = 'bang.png'
function handleCollision() {
    for(let i = 0; i < obstaclesArray.length; i++) {
        if(bird.x < obstaclesArray[i].x + obstaclesArray[i].width && 
            bird.x + bird.width > obstaclesArray[i].x &&
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) || 
            (bird.y > canvas.height - obstaclesArray[i].bottom -35 && 
                bird.y + bird.height < canvas.height))) {
                    //collision detected
                    ctx.drawImage(bang, bird.x, bird.y, 50, 50);
                    ctx.font = "25px Georgia";
                    ctx.fillStyle = 'white';
                    ctx.fillText('Game Over, your score is ' + score, 160, canvas.height/2 - 10);
                    return true;
                }
    }
}



