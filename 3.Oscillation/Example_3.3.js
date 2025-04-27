let mover;

function setup() {
    createCanvas(windowWidth,windowHeight);
    mover = new Mover;
}

function draw() {
    background(255);
    mover.show();
    mover.update();
    mover.checkEdges();
}

class Mover {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector(5, 0);
        this.acceleration = createVector();
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        let direction = p5.Vector.sub(mouse, this.position);
        direction.normalize();
        direction.mult(0.5);
        this.acceleration = direction;
    
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.position.add(this.velocity);
    }


    show() {
        let angle = atan2(this.velocity.y, this.velocity.x);
        push();
        rectMode(CENTER);
        translate(this.position.x, this.position.y);
        rotate(angle);
        fill(127);
        rect(0, 0, 60, 20);
        pop();
    }

      checkEdges() {
        if(this.position.x > width) {
            this.position.x = 0;
        } else if(this.position.x < 0) {
            this.position.x = width;
        }

        if(this.position.y > height) {
            this.position.y = 0;
        } else if(this.position.y < 0) {
            this.position.y = height;
        }
    }
}