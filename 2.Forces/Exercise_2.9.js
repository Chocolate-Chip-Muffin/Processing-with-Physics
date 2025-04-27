let water;
let boxes = [];

function setup() {
    createCanvas(windowWidth, windowHeight)
    water = new Liquid(0, height * 3 / 5, width, height * 2 / 5, 0.1);
    for(let i = 0; i < 9; i ++) {
        let mass = 6;
        boxes.push(new Mover(mass, 80 + i * ((width - 160) / 8), 50, mass * 3 * random(1, 3)))
    }
}

function draw(){
    background(255);
 
    water.show();

    for(let i = 0; i < boxes.length; i++) {
        if(water.contains(boxes[i])) {
            let dragForce = water.calculateDrag(boxes[i]);
            boxes[i].applyForce(dragForce)
        }

        let gravity = createVector(0, 0.1 * boxes[i].mass);
        boxes[i].applyForce(gravity)
        boxes[i].update()
        boxes[i].show()
        boxes[i].checkEdges()
    }

}




class Liquid {
    constructor(x, y, w, h, c) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      // The Liquid object includes a variable defining its coefficient of drag.
      this.c = c;
    }
  
    show() {
      noStroke();
      fill(200);
      rect(this.x, this.y, this.w, this.h);
    }
    
    calculateDrag(mover) {
        let speed = mover.velocity.mag();
        let dragMagnitude = this.c * speed * speed;
        let drag = mover.velocity.copy();
        drag.mult(-1);
        drag.setMag(dragMagnitude);
        console.log(drag)
        drag.mult(mover.length * 0.1)
        return drag;
    }

    contains(mover) {
        let y = mover.position.y;
        let length = mover.length;

        if(y + length >= this.y) {
            return true;
        }
        else {
            return false;
        }
    }

}

  


class Mover {
    constructor(mass, x, y, length) {
        this.position = createVector(x, y);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.length = length;
        this.mass = mass;
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(170);
        rect(this.position.x, this.position.y, this.length, this.length);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(18)
        this.position.add(this.velocity);

        this.acceleration.mult(0)
    }

    applyForce(force) {
        let acc = p5.Vector.div(force, this.mass)
        this.acceleration.add(acc);
    }

    checkEdges() {
        if(this.position.y + this.length >= height) {
            this.velocity.y *= -0.8;
            this.position.y = height - this.length;
        }
        if(this.position.x - this.length <= 0) {
            this.velocity.x *= -1;
            this.position.x = this.length;
        }
        if(this.position.x + this.length >= width) {
            this.velocity.x *= -1;
            this.position.x = width - this.length;
        }
    }
}