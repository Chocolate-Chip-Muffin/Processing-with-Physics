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
    let step = 30;
    let xstep = acceptreject() * step * floor(random(-1, 2));
    let ystep = acceptreject() * step * floor(random(-1, 2));
    this.x += xstep;
    this.y += ystep;
  }
}

let walker;

function acceptreject() {
  while (true) {
    let r1 = random(1);
    let probability = r1 * r1;
    let r2 = random(1);
    if (r2 < probability) {
      return r1;
    }
  }
}