let angle = 0;
let velocity = 0.1;
let acceleration = 0.0005;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);

    translate(width / 2, height / 2);
    rotate(angle);
    stroke(0);
    strokeWeight(2);
    fill(175);
    line(-100, 0, 100, 0);
    circle(100, 0, 70);
    circle(-100, 0, 70);

    velocity += acceleration;
    angle += velocity;
    
}