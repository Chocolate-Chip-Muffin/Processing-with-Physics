let body1
let body2

function setup() {
    createCanvas(640, 240);

    body1 = new Body(320, 40, 1, 0);
    body2 = new Body(320, 200, -1, 0);
}

function draw() {
    background(255);

    let attraction1 = body1.attract(body2);
    let attraction2 = body2.attract(body1);
    body1.applyForce(attraction2);
    body2.applyForce(attraction1);

    body1.show();
    body2.show();

    body1.update();
    body2.update();
}

class Body {
    constructor(x, y, vx, vy) {
        this.position = createVector(x, y);
        this.velocity = createVector(vx, vy);
        this.acceleration = createVector();
        this.mass = 10;
        this.radius = this.mass * 2;
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

        this.acceleration.mult(0);
    }

    attract(mover) {
        let force = p5.Vector.sub(this.position, mover.position);
        let distance = force.mag();

        force.normalize()

        distance = constrain(distance, 5, 25);
        let strength = (this.mass * mover.mass) / (distance ** 2);
        force.setMag(strength);

        return force;
    }

    applyForce(force) {
        let apply = p5.Vector.div(force, this.mass);
        this.acceleration.add(apply);
    }

}