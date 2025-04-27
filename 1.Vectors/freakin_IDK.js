let position;
let velocity;
let boxsize;
let radius;
let offset;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    position = createVector(0, 0, 0);
    velocity = createVector(3, 4, 5);
    boxsize = 300;
    radius = 20;
    offset = boxsize / 2 - radius;
}

function draw() {
    background(255);
    orbitControl();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    if (position.x > offset || position.x < -offset) {
        velocity.x = velocity.x * -1;
    }
    if (position.y > offset || position.y < -offset) {
        velocity.y = velocity.y * -1;
    }
    if (position.z > offset || position.z < -offset) {
        velocity.z = velocity.z * -1;
    }
    position.add(velocity);

    stroke(100);
    strokeWeight(5);
    noFill();
    box(boxsize);
    stroke(0);
    fill(127);
    push();
    translate(position.x, position.y, position.z);
    sphere(radius);
    pop();
}