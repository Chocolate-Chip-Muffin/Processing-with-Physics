let move;

function setup() {
    createCanvas(windowWidth, windowHeight);
    move = new Mover();
}

function draw(){
    background(255)

    move.update()
    move.show()
    move.checkEdges()
}

class Mover {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector();
        this.acceleration = createVector();
        this.radius = 25;
        this.topSpeed = 80
    }

    update() {
        this.acceleration = p5.Vector.random2D();
        this.acceleration.mult(random(0.8));
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);
        this.position.add(this.velocity);
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        circle(this.position.x, this.position.y, this.radius * 2);
    }

    checkEdges() {
        if(this.position.y - this.radius > height) {
            this.position.y = 0 - this.radius;
        }
        if(this.position.x - this.radius > width) {
            this.position.x = 0 - this.radius;
        }
        if(this.position.y + this.radius < 0) {
            this.position.y = height - this.radius;
        }
        if(this.position.x + this.radius < 0) {
            this.position.x = width - this.radius;
        }
    }
}