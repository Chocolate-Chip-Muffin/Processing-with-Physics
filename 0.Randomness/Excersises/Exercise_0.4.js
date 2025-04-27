function setup() {
    createCanvas(3840, 2400);
}

function draw() {
    let x = randomGaussian(width / 2, 500);
    let y = randomGaussian(height / 2, 500);
    console.log(x);
    noStroke();
    let r = randomGaussian(200, 40);
    let g = randomGaussian(200, 40);
    let b = randomGaussian(200, 40);
    fill(r, g, b);
    circle(x, y, 100);
}