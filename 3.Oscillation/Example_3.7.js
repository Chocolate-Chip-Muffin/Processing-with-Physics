let oscillators = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < 10; i++) {
        oscillators.push(new Oscillator);
    }
}

function draw() {
    background(255);
    for (let i = 0; i < 10; i++) {
        oscillators[i].show();
        oscillators[i].update();
    }
}

class Oscillator {
    constructor() {
        this.angle = createVector();
        this.angleVelocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
        this.amplitude = createVector(random(20, width / 2), random(20, height / 2));
    }

    update() {
        this.angle.add(this.angleVelocity);
    }

    show() {
        let x = sin(this.angle.x) * this.amplitude.x
        let y = sin(this.angle.y) * this.amplitude.y


        push();
        translate(width / 2, height / 2);
        stroke(0);
        fill(127);
        line(0, 0, x, y);
        circle(x, y, 96);
        pop();
    }
}