acceleration = -0.05
velocity = 0

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
function draw() {
    background(255);
    let period = 180;
    let amplitude = 500;
    let y = abs((amplitude * sin(TWO_PI * frameCount / period)) * 0.7);
    velocity = velocity + acceleration
    y = y + velocity
    // if (velocity >= -1) {
        stroke(0);
        strokeWeight(4);
        fill(127);
        translate(width / 2, height / 2);
        line(0, -1 * height / 2, 0, y);
        circle(0, y, 96);
    // } else {
    //     amplitude = 0
    // }
}