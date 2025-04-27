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
      this.x += floor(random(-1, 5)) * 10;
      this.y += floor(random(-1, 5)) * 10;  
    }
  }
  
  let walker;
  