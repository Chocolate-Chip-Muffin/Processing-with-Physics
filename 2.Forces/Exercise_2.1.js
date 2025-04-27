let move;
let t = 0;
let t2 = 10000;

function setup() {
    createCanvas(windowWidth, windowHeight);
    move = new Mover();
}

function draw() {
    background(255);

    move.show();
    let helium = createVector(0, -0.1);
    move.applyForce(helium);
    // if (mouseIsPressed) {
    //     let mouse = createVector(mouseX, mouseY);
    //     console.log(mouse);
    //     let wind = p5.Vector.sub(move.position, mouse);
    //     wind.setMag(0.5)
    //     move.applyForce(wind);
    // }
    let x = map(noise(t), 0, 1, -0.5, 0.5);
    let y = map(noise(t2), 0, 1, -0.5, 0.5);
    let wind = createVector(x, y);
    move.applyForce(wind);
    move.checkEdges();
    move.update();
}

class Mover {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector();
        this.acceleration = createVector(0, -3);
        this.radius = 25;
        this.topSpeed = 30;
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        circle(this.position.x, this.position.y, this.radius * 2);
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        // this.velocity.limit(this.topSpeed);
        this.position.add(this.velocity);

        this.acceleration.mult(0);

        t += 0.1;
        t += 0.1
    }

    checkEdges() {
        if(this.position.y - this.radius < 0) {
            this.velocity.y = this.velocity.y * -0.8;
            this.position.y = this.radius;
        }
        if(this.position.x + this.radius > width) {
            this.velocity.x = this.velocity.x * -0.8;
            this.position.x = width - this.radius;
        }
        if(this.position.x - this.radius < 0) {
            this.velocity.x = this.velocity.x * -0.8;
            this.position.x = this.radius;
        }
    }
}