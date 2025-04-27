let r;
let theta;

function setup() {
    createCanvas(windowWidth, windowHeight);
    r = height / 2
    theta = 0
}

function draw() {
    background(255);
    translate(width / 2, height / 2);

    let x = r * cos(theta)
    let y = r * sin(theta)

    line(0, 0, x, y);
    circle(x, y, 50);

    theta += 0.1
}