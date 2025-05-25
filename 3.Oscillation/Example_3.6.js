let angle = 0;
let anglevelocity = 0.05;

function setup() {
    createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
    background(255);
    angle += anglevelocity;
    let period = 180;
    let amplitude = 500;
    let x = amplitude * sin(angle);
    stroke(0);
    strokeWeight(4);
    fill(127);
    translate(width / 2, height / 2);
    line(0, 0, x, 0);
    circle(x, 0, 96);
  }