let maka = []

function setup() {
    createCanvas(3840, 2400);
    for (let i = 0; i < 20; i++) {
        maka.push(0);
    }
}

function draw() {
    background(255);
    stroke(0);
    strokeWeight(10);
    let halo = floor(random(20));
    maka[halo] += 4;
    let pillar = width / 20;
    console.log(maka);
    console.log(pillar);
    for (let i = 0; i < 20; i++) {
        rect(i * pillar, height - maka[i], pillar, maka[i]);
        rect()
    }
}