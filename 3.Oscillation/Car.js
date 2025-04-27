let car;

function setup() {
    createCanvas(windowWidth, windowHeight);
    car = new Car();
}

function draw() {
    background(255);

    if (keyIsPressed === true) {
        if (keyCode === 90) {
            let f = createVector(2, 0);
            f.rotate(car.angle);
            car.acceleration.add(f);
            }
            // push(); 
            // translate(car.position.x, car.position.y);
            // rotate(car.angle * -1);
            // let f = createVector(2, 0);
            // car.acceleration.add(f);
            // rotate(car.angle);
            // pop();
        // } else if (keyCode === DOWN_ARROW) {
        //     speed = car.velocity.copy()
        //     speed.rotate(car.angle * -1);
        //     if (speed.x > 0) {
        //         let f = createVector(-0.2, 0);
        //         f.rotate(car.angle);
        //         car.acceleration.add(f);
        //     } else {
        //         car.velocity.setMag(0);
        //     }
        // }

        if (keyCode === LEFT_ARROW) {
            car.angle -= 0.1;
            car.velocity.rotate(-0.1);
            car.acceleration.rotate(-0.1);
        } else if (keyCode === RIGHT_ARROW) {
            car.angle += 0.1
            car.velocity.rotate(0.1);
            car.acceleration.rotate(0.1);
        }
    }

    car.show();
    car.update();
    car.checkEdges();
}

class Car {
    constructor() {
        this.position = createVector(width / 2, height / 2);
        this.velocity = createVector();
        this.acceleration = createVector();
        this.angle = 0;
        this.topspeed = 10;
        this.friction = 0.03
        this.r = 40
    }

    update() {
        this.acceleration.setMag(this.acceleration.mag() - this.friction)
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.velocity.setMag(this.velocity.mag() - this.friction)
        this.position.add(this.velocity);

        this.acceleration.mult(0);
    }

    show() {
        push();
        rectMode(CENTER);
        translate(this.position.x, this.position.y);
        rotate(this.angle);
        fill(127);
        rect(0, 0, 60, 20);
        pop();
    }

    checkEdges() {
    let buffer = this.r * 2;
    if (this.position.x > width + buffer) {
        this.position.x = -buffer;
    } else if (this.position.x < -buffer) {
        this.position.x = width + buffer;
    } 
    if (this.position.y > height + buffer) {
        this.position.y = -buffer;
    } else if (this.position.y < -buffer) {
        this.position.y = height + buffer;
    }
  }
}