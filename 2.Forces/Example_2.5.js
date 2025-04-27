let water;
let balls = [];

function setup() {
    createCanvas(windowWidth, windowHeight)
    water = new Liquid(0, height * 3 / 5, width, height * 2 / 5, 0.1);
    for(let i = 0; i < 9; i ++) {
        let mass = random(0.8, 6);
        boxes.push(new Mover(mass, 100 + i * ((width - 200) / 8), 50, mass * 5))
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
        return drag;
    }

    contains(mover) {
        let y = mover.position.y;
        let radius = mover.radius;

        if(y + radius >= this.y) {
            return true;
        }
        else {
            return false;
        }
    }

}

  


class Mover {
    constructor(mass, x, y, radius) {
        this.position = createVector(x, y);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.radius = radius;
        this.mass = mass;
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(170);
        circle(this.position.x, this.position.y, this.radius * 2);
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
        if(this.position.y + this.radius >= height) {
            this.velocity.y *= -0.8;
            this.position.y = height - this.radius;
        }
        if(this.position.x - this.radius <= 0) {
            this.velocity.x *= -1;
            this.position.x = this.radius;
        }
        if(this.position.x + this.radius >= width) {
            this.velocity.x *= -1;
            this.position.x = width - this.radius;
        }
    }
}