let r;
let theta;

function setup() {
    createCanvas(windowWidth, windowHeight);
    r = 0
    theta = 0
}

function draw() {
    translate(width / 2, height / 2);

    let x = r * cos(theta)
    let y = r * sin(theta)

    strokeWeight(3);
    r += 0.3
    strokeWeight(2);
    fill(0);
    circle(x, y, 50);

    theta += 0.02
}