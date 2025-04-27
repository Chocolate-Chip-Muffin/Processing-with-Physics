let maka

function setup() {
    createCanvas(windowWidth, windowHeight);
    maka = new Mover()
}

function draw() {
    background(255);

    maka.update()
    maka.show()
    maka.checkEdges()
}

class Mover {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(0, random(2, 6));
        this.radius = 25;
        this.acceleration = createVector(0, 0.01);
        this.topSpeed = 80;
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        circle(this.position.x, this.position.y, this.radius * 2);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);

        this.position.add(this.velocity);
    }

    checkEdges() {
        if(this.position.y - this.radius > height) {
            this.position.y = 0 - this.radius;
        }
        if(this.position.x - this.radius > width) {
            this.position.x = 0 - this.radius;
        }
    }
}