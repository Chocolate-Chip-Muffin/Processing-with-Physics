let oscillators = [];
let angles = [];
let amplitude;
let angleDifference;
let angleVelocity;
let angle;
let startAngle;
let x_offset;
let xOffests = [];
let y_offset;
let yOffsets = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    amplitude = createVector(70, height / 4);
    angleVelocity = createVector(random(-0.001, 0.001), random(-0.005, 0.005));
    angle = createVector();
    angleDifference = createVector(0.1, 0.2);
    startAngle = createVector(0, 0.2)
    x_offset = -3 * 30;
    y_offset = 0;
    for (let i = 0; i < 6; i++) {
      angles.push(angle.copy())
      oscillators.push(new Oscillator(amplitude, angles[i].copy()));
      angle.add(angleDifference);
      xOffests.push(x_offset)
      x_offset += 30;
      yOffsets.push(y_offset);
      y_offset += 0.5
    }
    angle = createVector();
}

function draw() {
    background(255);
    for (let i = 0; i < 6; i++) {
        oscillators[i].show(xOffests[i], yOffsets[i]);
        oscillators[i].update(angleVelocity, startAngle);
    }
}

class Oscillator {
    constructor(amplitude, angle) {
        this.angle = angle
        this.amplitude = amplitude;
        console.log(angle);
    }

    update(angleVelocity, startAngle) {
        this.angle = startAngle;
        startAngle.add(0.001, 0.007)
        this.angle.add(angleVelocity);
    }

    show(x_offset, y_offset) {
        let x = cos(this.angle.x + x_offset) * this.amplitude.x * 30
        let y = sin(this.angle.y + y_offset) * this.amplitude.y
        push();
        translate(width / 2, height / 2);
        stroke(0);
        fill(127);
        line(0, 0, x, y);
        circle(x, y, 96);
        pop();
    }
}