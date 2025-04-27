let mover;
let attractor;

function setup() {
    createCanvas(640, 360);
    attractor = new Attractor(20);
    mover = new Mover(300, 50, 2);
}

function draw() {
    background(255);
    
    let gravity = attractor.attract(mover);
    mover.applyForce(gravity);

    mover.update();
    mover.show();
    attractor.show();

}

function mouseMoved() {
    attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
    attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
    attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
    attractor.stopDragging()
}


class Attractor {
    constructor(mass) {
        this.position = createVector(width / 2, height / 2);
        this.mass = mass;
        this.dragging = false;
        this.dragOffset = createVector();
        this.hover = false;
        this.radius = mass * 2
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
        stroke(0)

        if(this.dragging) {
            fill(50)
        } else if(this.hover) {
            fill(100)
        } else {
            fill(175, 200)
        }

        circle(this.position.x, this.position.y, this.radius);

    }

    handlePress(mx, my) {
        let distance = dist(mx, my, this.position.x, this.position.y);
        if(distance < this.radius) {
            this.dragging = true
            this.dragOffset.x = this.position.x - mx;
            this.dragOffset.y = this.position.y - my;
        }
    }

    handleHover(mx, my) {
        let distance = dist(mx, my, this.position.x, this.position.y);
        if(distance < this.radius) {
            this.hover = true;
        } else {
            this.hover = false;
        }
    }

    handleDrag(mx, my) {
        if(this.dragging) {
            this.position.x = mx + this.dragOffset.x;
            this.position.y = my + this.dragOffset.y;
        }
    }

    stopDragging() {
        this.dragging = false;
    }
}


class Mover{
    constructor(x, y, mass) {
        this.position = createVector(x, y);
        this.velocity = createVector(1, 0);
        this.acceleration = createVector(0, 0);
        this.mass = mass;
        this.radius = mass * 8;
    }

    applyForce(force) {
        let apply = p5.Vector.div(force, this.mass);
        this.acceleration.add(apply);
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        circle(this.position.x, this.position.y, this.radius * 2);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);

        this.acceleration.mult(0);
    }
}

