let angle = 0;
let deltaAngle = 0.05;
let amplitude = 700;
let startAngle = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  stroke(0);
  fill(127, 127);

  angle = startAngle;
  startAngle += 0.02

  for (let x = 0; x <= width; x += 100) {
    let y = amplitude * noise(angle);
    circle(x, y + height / 2, 200);
    angle += deltaAngle;
  }
}