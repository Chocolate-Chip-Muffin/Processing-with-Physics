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
        this.position = createVector(width / 2, height / 2);
    }
    show() {
        stroke(0);
        strokeWeight(10);
        point(this.position);
    }
    step() {
        let velocity = createVector(floor(random(-1, 2)) * 10, floor(random(-1, 2)) * 10);
        this.position.add(velocity);
   }
}

let walker;
