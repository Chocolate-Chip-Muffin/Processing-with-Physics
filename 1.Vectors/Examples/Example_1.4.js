function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255)
    let centerPoint = createVector(width / 2, height / 2);
    let mousePoint = createVector(mouseX, mouseY);
    let maka = mousePoint.copy().sub(centerPoint).div(2);

    stroke(200);
    strokeWeight(2);
    line(centerPoint.x, centerPoint.y, mousePoint.x, mousePoint.y);

    translate(centerPoint.x, centerPoint.y);

    stroke(0);
    strokeWeight(4);
    line(0, 0, maka.x, maka.y);
}