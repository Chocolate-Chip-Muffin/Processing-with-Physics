let oscillators = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    let amplitude = createVector(random(20, width / 2), random(20, height / 2));
    let angleVelocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05))
    let angle = createVector();
    let angleDifference = createVector(0.05, 0.05)
    for (let i = 0; i < 10; i++) {
        oscillators.push(new Oscillator(amplitude, angle, angleVelocity));
        angle.add(angleDifference);
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
    constructor(amplitude, angle, angleVelocity) {
        this.angle = angle
        this.amplitude = amplitude;
        this.angleVelocity = angleVelocity;
    }

    update(angleVelocity) {
        this.angle.add(angleVelocity);
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