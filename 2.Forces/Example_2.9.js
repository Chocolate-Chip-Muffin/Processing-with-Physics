let bodies = []

function setup() {
    createCanvas(640, 240);

    for(let i = 0; i < 10; i ++) {
        bodies.push(new Body(random(width), random(height), random(0.1, 2)));
    }

}

function draw() {
    background(255);

    for(let i = 0; i < bodies.length; i ++) {
        for(let j = 0; j < bodies.length; j ++) {
            if(i !== j) {
                let attraction1 = bodies[j].attract(bodies[i]);
                let attraction2 = bodies[i].attract(bodies[j]);
                bodies[i].applyForce(attraction1);
                bodies[j].applyForce(attraction2);
            }
        }
        bodies[i].show();
        bodies[i].update();
    }

}

class Body {
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.mass = mass;
        this.radius = this.mass * 4;
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