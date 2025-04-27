function setup() {
    createCanvas(3840, 2400);
    walker = new Walker();
    background(255);
  }
  
  function draw() {
    walker.step();
    walker.show();
  }
  
  class Walker {
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
    }
    show() {
      stroke(0);
      strokeWeight(10);
      point(this.x, this.y);
    }
    step() {
      let maka = floor(random(2))
        if(maka === 0) {
            this.x += floor(random(-1, 2)) * 10;
            this.y += floor(random(-1, 2)) * 10;
        } else if(maka === 1) {
            if (mouseX > this.x) {
                this.x += 10
            } else {
                this.x -= 10
            } 
            if (mouseY > this.y) {
                this.y += 10
            } else {
                this.y -= 10
            }
        }
    }
  }
  
  let walker;
  