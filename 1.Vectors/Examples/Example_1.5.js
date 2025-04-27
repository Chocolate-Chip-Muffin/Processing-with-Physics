function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);
    let centerPoint = createVector(width / 2, height / 2);
    let mousePoint = createVector(mouseX, mouseY);
    let maka = mousePoint.copy().sub(centerPoint);
    let makaMag = maka.mag();

    stroke(0);
    strokeWeight(2);
    line(centerPoint.x, centerPoint.y, mousePoint.x, mousePoint.y);

    rect(20, 20, makaMag, 40);
}