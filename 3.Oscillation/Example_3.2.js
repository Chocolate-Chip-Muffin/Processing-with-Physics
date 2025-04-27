let movers = [];
let attractor;

function setup() {
    createCanvas(windowWidth, windowHeight);
    attractor = new Attractor(20);
    for(let i = 0; i < 2; i ++) {
        movers.push(new Mover(random(width / 2 - 300, width / 2 + 300), random(height / 2 - 200, height / 2 + 200), random(0.5, 3)))
    }
}

function draw() {
    background(255);
    attractor.show();
    for(let i = 0; i < movers.length; i ++) {
        let gravity = attractor.attract(movers[i]);
        movers[i].applyForce(gravity);

        movers[i].update();
        movers[i].show();
    }
}


class Attractor {
    constructor(mass) {
        this.position = createVector(width / 2, height / 2);
        this.mass = mass;
        this.radius = 100
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

    show() {
        stroke(0);
        strokeWeight(2);
        fill(175);
        circle(this.position.x, this.position.y, this.radius);
        console.log("attractor show")
    }
}


class Mover{
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.velocity = createVector(0, 0);
        this.acceleration = createVector(0, 0);
        this.mass = mass;
        this.radius = mass * 8;
        this.angle = 0;
        this.angleVelocity = 0.1;
        this.angleAcceleration = 0;
    }

    applyForce(force) {
        let apply = p5.Vector.div(force, this.mass);
        this.acceleration.add(apply);
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        push();
        circle(this.position.x, this.position.y, this.radius * 2);
        translate(this.position.x, this.position.y);
        rotate(this.angle);
        circle(this.position.x, this.position.y, this.radius * 2);
        line(0, 0, this.radius, 0);
        pop()
    }

    update() {
        this.acceleration.limit(10)
        this.velocity.add(this.acceleration);
        this.velocity.limit(10)
        this.position.add(this.velocity);

        this.acceleration.mult(0);

        
        this.angleAcceleration = this.acceleration.x / 10.0;
        this.angleVelocity += this.angleAcceleration;
        this.angleVelocity = constrain(this.angleVelocity, -0.1, 0.1);
        this.angle += this.angleVelocity;
    }
}

