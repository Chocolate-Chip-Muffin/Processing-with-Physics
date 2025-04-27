let bullet;
let g = false

function setup() {
    createCanvas(windowWidth, windowHeight);
    bullet = new Bullet(1);
}

function draw() {
    background(255);

    let gravity = createVector(0, 0.1 * bullet.mass);
    if (g) {
        bullet.applyForce(gravity);
    }
    bullet.show();
    bullet.update();
    bullet.checkEdges();
}

function mousePressed() {
    g = true
    bullet.rotate = true
    let shooting = createVector(10, -3);
    bullet.applyForce(shooting);
}

class Bullet {
    constructor(mass) {
        this.position = createVector(20, height / 2);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.mass = mass;
        this.radius = this.mass * 10;
        this.rotate = false
        this.angle = 0;
    }

    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        this.angle += 0.1;
    }

    checkEdges() {
        if (this.position.y + this.radius > height) {
            this.velocity.y *= -1;
            this.position.y = height - this.radius;
        }
        
        if (this.position.x + this.radius > width) {
            this.velocity.x *= -1;
            this.position.x = width - this.radius;
        } else if (this.position.x < this.radius) {
            this.velocity.x *= -1;
            this.position.x = this.radius;
        }
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
        if (this.rotate) {
            push();
            translate(this.position.x, this.position.y);
            rotate(this.angle);
            line(0, 0, this.radius, 0);
            pop()
        }
    }
}