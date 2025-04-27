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
      this.x = width / 2;
      this.y = height / 2;
    }
  
    step() {
      let stepx = map(noise(this.tx), 0, 1, -20, 20) * 2;
      let stepy = map(noise(this.ty), 0, 1, -20, 20) * 2;
      this.x += stepx;
      this.y += stepy;
      this.tx += 0.01;
      this.ty += 0.01;
    }

    show() {
        stroke(0);
        strokeWeight(10);
        circle(this.x, this.y, 100);
    }
  }