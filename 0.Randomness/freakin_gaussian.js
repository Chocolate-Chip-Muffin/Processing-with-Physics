function setup() {
    createCanvas(3840, 2400);
}

function draw() {
    let x = randomGaussian(width / 2, 1000);
    console.log(x);
    noStroke();
    fill(0, 10);
    circle(x, height / 2, 300);
}