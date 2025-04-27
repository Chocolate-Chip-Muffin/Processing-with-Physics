function setup() {
    createCanvas(3840, 2400);
    walker = new Walker();
    background(255);
  }
  
  function draw() {
    walker.step();
    walker.show();
  }
  
let walker;

class Walker {
    constructor() {
      this.tx = 0;
      this.ty = 10000;
    }
  
    step() {
      this.x = map(noise(this.tx), 0, 1, 0, width);
      this.y = map(noise(this.ty), 0, 1, 0, height);
      this.tx += 0.01;
      this.ty += 0.01;
    }

    show() {
        stroke(0);
        strokeWeight(10);
        circle(this.x, this.y, 100);
    }
  }