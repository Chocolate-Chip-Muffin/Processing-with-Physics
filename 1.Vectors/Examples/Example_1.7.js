let maka

function setup() {
    createCanvas(windowWidth, windowHeight);
    maka = new Mover()
}

function draw() {
    background(255);

    maka.update()
    maka.show()
    maka.checkEdges()
}

class Mover {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = createVector(random(2, 6), random(2, 6));
        this.radius = 25;
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        circle(this.position.x, this.position.y, this.radius * 2);
    }

    update() {
        this.position.add(this.velocity);
    }

    checkEdges() {
        if(this.position.y + this.radius > height) {
            this.position.y = 0 - this.radius
        }
    }
}