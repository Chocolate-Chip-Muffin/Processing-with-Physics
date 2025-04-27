function setup() {
    createCanvas(windowWidth, windowHeight);
  }

function draw() {
    background(255)
    let center_point = createVector(width / 2, height / 2);
    let mouse_point = createVector(mouseX, mouseY);

    stroke (200);
    strokeWeight(6);
    line(0, 0, center_point.x, center_point.y)
    line(0, 0, mouse_point.x, mouse_point.y)
    let maka = center_point.copy().sub(mouse_point);
    stroke(0)
    line(mouse_point.x, mouse_point.y, center_point.x, center_point.y)
}