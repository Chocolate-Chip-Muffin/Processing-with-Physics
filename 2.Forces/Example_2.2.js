let ball;
let ball2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    ball = new Mover(1, (width * 2) / 3, 50, 25);
    ball2 = new Mover (30, width / 3, 50, 70);
}

function draw() {
    background(255);
    let gravity = createVector(0, 0.1);
    let wind = createVector(0.1, 0);

    ball2.show();
    ball.show();
    ball.applyForce(gravity);
    ball2.applyForce(gravity);
    if(mouseIsPressed) {
        ball.applyForce(wind);
        ball2.applyForce(wind);
    }
    console.log(ball.acceleration, ball2.acceleration);
    ball.update();
    ball2.update();
    ball.checkEdges();
    ball2.checkEdges();
}

class Mover {
    constructor(mass, x, y, radius) {
        this.position = createVector(x, y);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.mass = mass;
        this.radius = radius;
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        circle(this.position.x, this.position.y, this.radius * 2);
    }

    applyForce(force) {
        let acc = p5.Vector.div(force, this.mass)
        this.acceleration.add(acc);
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