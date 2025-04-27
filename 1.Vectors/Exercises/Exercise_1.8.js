let move;

function setup() {
    createCanvas(windowWidth, windowHeight);
    move = new Mover();
}

function draw(){
    background(255)

    move.update()
    move.show()
    // move.checkEdges()
}

class Mover {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.radius = 25;
        this.topSpeed = 80;
    }

    update() {
        let mouse = createVector(mouseX, mouseY);
        let go = p5.Vector.sub(mouse, this.position);
        // go.normalize();
        // go.mult(0.3);
        // go.setMag(0.2)
        go.setMag(50 / go.mag())
        this.acceleration = go;
        console.log(go)
        console.log(go.mag())
        console.log(this.acceleration)

        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topSpeed);
        this.position.add(this.velocity);
        // this.acceleration = p5.Vector.random2D();
        // this.acceleration.mult(random(1.5));
        // this.velocity.add(this.acceleration);
        // this.velocity.limit(this.topSpeed);
        // this.position.add(this.velocity);
    }

    show() {
        stroke(0);
        strokeWeight(2);
        fill(127);
        circle(this.position.x, this.position.y, this.radius * 2);
        // circle(this.position.x, this.position.y, 1);
    }

    // checkEdges() {
    //     if(this.position.y - this.radius > height) {
    //         this.position.y = 0 - this.radius;
    //     }
    //     if(this.position.x - this.radius > width) {
    //         this.position.x = 0 - this.radius;
    //     }
    //     if(this.position.y + this.radius < 0) {
    //         this.position.y = height - this.radius;
    //     }
    //     if(this.position.x + this.radius < 0) {
    //         this.position.x = width - this.radius;
    //     }
    // }
}