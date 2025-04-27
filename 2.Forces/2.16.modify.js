let bodies = [];
let centre;
let counter = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);

    for(let i = 0; i < 100; i ++) {
        bodies.push(new Body(random(width / 3, width * 2 / 3), random(height / 3, height * 2 / 3), random(0.1, 2)));
    }

    centre = new Body(width / 2, height / 2, 250);

}

function draw() {
    counter ++;

    for(let i = 0; i < bodies.length; i ++) {
        let attraction = centre.attract(bodies[i]);
        bodies[i].applyForce(attraction);
        for(let j = 0; j < bodies.length; j ++) {
            if(i !== j) {
                let attraction1 = bodies[j].attract(bodies[i]);
                let attraction2 = bodies[i].attract(bodies[j]);
                // bodies[i].applyForce(attraction1);
                // bodies[j].applyForce(attraction2);
            }
        }
        bodies[i].show();
        bodies[i].update();
    }

}

class Body {
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.velocity = this.position.copy();
        this.velocity.setMag(random(10 ,15))
        this.velocity.rotate(PI / 2);
        this.acceleration = createVector();
        this.mass = mass;
        this.radius = this.mass * 4;
        this.r = random(150, 255);
        this.g = random(150, 255);
        this.b = random(150, 255);
    }

    show() {
        noStroke();
        fill(this.r, this.g, this.b);
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