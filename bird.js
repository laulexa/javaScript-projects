    class Bird {
        constructor() {
          this.x = 150;
          this.y = 200;
          this.vy = 0; //determine vertical speed of our bird (velocity y)
          this.width = 20;
          this.height = 20;
          this.weight = 1;
        }
        update() {
            let curve = Math.sin(angle) * 20;
            if (this.y > canvas.height - this.height * 3 + curve) {
              this.y = canvas.height - this.height * 3 + curve;
              this.vy = 0;
            } else {
              this.vy += this.weight;
              this.vy *= 0.9;
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
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    flap() {
        this.vy -= 2; // everytime we flap our wings velocity Y will decrease by 2, giving the player a push upwards
              }    
}
const bird = new Bird();
 
 
