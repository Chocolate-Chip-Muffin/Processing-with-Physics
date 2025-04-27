let bodies = [];
let mouse;

function setup() {
    createCanvas(640, 240);

    for(let i = 0; i < 10; i ++) {
        bodies.push(new Body(random(width), random(height), random(0.1, 2)));
    }

    mouse = new Body(mouseX, mouseY, 20);

}

function draw() {
    background(255);

    mouse.position.x = mouseX;
    mouse.position.y = mouseY;

    for(let i = 0; i < bodies.length; i ++) {
        let attraction = mouse.attract(bodies[i]);
        bodies[i].applyForce(attraction);
        for(let j = 0; j < bodies.length; j ++) {
            if(i !== j) {
                let attraction1 = bodies[j].attract(bodies[i]);
                let attraction2 = bodies[i].attract(bodies[j]);
                attraction1.mult(-1);
                attraction2.mult(-1);
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