    const dragonSprite = new  Image();
    dragonSprite.src = 'corgis3.png';

    class Bird {
        constructor() {
          this.x = 150;
          this.y = 200;
          this.vy = 0; //determine vertical speed of our bird (velocity y)
          this.originalWidth = 195;// you can calculate width of one frame from your spreadsheet by taking the total width and dividing it by the number of images per row
          this.originalHeight = 158;
          this.width = this.originalWidth/5;
          this.height = this.originalHeight/5;
          this.weight = 1;
          this.frameX = 0;
        }
        update() {
            let curve = Math.sin(angle) * 20;
            if (this.y > canvas.height - this.height * 2 + curve) {
              this.y = canvas.height - this.height * 2 + curve;
              this.vy = 0;
            } else {
              this.vy += this.weight;
              this.vy *= 0.7;
              this.y += this.vy;
            }
            if (this.y < 0 + this.height) {
              this.y = 0 + this.height;
              this.vy = 0;
            }
        
            if (spacePressed) this.flap();
          } //position and speed of player character for each frame
          //make sure the player can't leave the screen
    draw() {
        ctx.fillStyle = 'red';
        // ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.drawImage(dragonSprite, this.frameX * this.originalWidth, 0, this.originalWidth, this.originalHeight, this.x -4, this.y -10, this.width * 1.3, this.height * 1.3);
    }
    flap() {
        this.vy -= 2; // everytime we flap our wings velocity Y will decrease by 2, giving the player a push upwards
        if(this.frameX >= 3) this.frameX = 0;
        else if (frame%7 === 0) this.frameX++;
              }    
}
const bird = new Bird();
 
 
