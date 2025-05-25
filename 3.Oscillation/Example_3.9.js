let angle = 0;
let deltaAngle = 0.2;
let amplitude = 700;
let startAngle = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  stroke(0);
  fill(127, 127);

  let angle = startAngle;
  startAngle += 0.02;

  for (let x = 0; x <= width; x += 100) {
    let y = amplitude * sin(angle);
    circle(x, y + height / 2, 200);
    angle += deltaAngle;
  }
}