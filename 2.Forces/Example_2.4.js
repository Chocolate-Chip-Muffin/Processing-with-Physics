let ball;

function setup() {
    createCanvas(windowWidth, windowHeight);
    ball = new Mover(1, width / 2, 50, 25);
}

function draw() {
    background(255)

    let gravity = createVector(0, 0.1 * ball.mass);
    let wind = createVector(0.1, 0);

    ball.show();
    ball.applyForce(gravity);
    if(mouseIsPressed) {
        ball.applyForce(wind);
    }
    ball.update();
    ball.checkEdges();

    if(ball.contactEdge()) {
        let c = 0.1
        let friction = ball.velocity.copy()
        friction.setMag(c * gravity.mag())
        friction.mult(-1)

        ball.applyForce(friction)
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

    contactEdge() {
        if(this.position.y + this.radius >= height) {
            return true
        } else {
            return false
        }
    }
}