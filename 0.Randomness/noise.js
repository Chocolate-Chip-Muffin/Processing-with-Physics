// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

function setup() {
    createCanvas(640, 240);
  
    // Tell p5 we will work with pixels
    loadPixels();
  // Start xoff at 0.
  let xoff = 0.0;
  
  for (let x = 0; x < width; x++) {
    // For every xoff, start yoff at 0.
    let yoff = 0.0;
  
    for (let y = 0; y < height; y++) {
      // Use xoff and yoff for noise().
      let bright = map(noise(xoff, yoff), 0, 1, 0, 255);
      // Use x and y for the pixel position.
      let index = (x + y * width) * 4;
      // Set the red, green, blue, and alpha values.
      pixels[index] = bright;
      pixels[index + 1] = bright;
      pixels[index + 2] = bright;
      pixels[index + 3] = 255;
      // Increment yoff.
      yoff += 0.01;
    }
    // Increment xoff.
    xoff += 0.01;
  }
  updatePixels();
  }
  
  function draw() {}
  