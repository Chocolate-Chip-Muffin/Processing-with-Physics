let ball;

function setup() {
    createCanvas(windowWidth, windowHeight);
    ball = new Mover();
}

function draw() {
    background(255);
    let gravity = createVector(0, 0.5);
    let wind = createVector(0.2, 0);

    ball.show();
    ball.applyForce(gravity);
    if(mouseIsPressed) {
        ball.applyForce(wind);
    }
    ball.update();
    ball.checkEdges();
}

class Mover {
    constructor() {
        this.position = createVector(width / 2, 50);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.radius = 25;
        this.mass = 1;
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        circle(this.position.x, this.position.y, this.radius * 2);
    }

    applyForce(force) {
        let acc = p5.Vector.div(force, this.mass)
        this.acceleration.add(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

        this.acceleration.mult(0)
    }

    checkEdges() {
        if(this.position.y + this.radius >= height) {
            this.velocity.y *= -1;
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