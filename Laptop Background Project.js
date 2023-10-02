//funny little abstract art background, reminds me of stained glass??

function setup() {
  createCanvas(800, 450);
  background(255,255,255);
  frameRate(4)
}
function draw() {
  strokeWeight(4);
  stroke(random(255),random(255),random(255));
  
  for (var x = 0; x<=mouseX; x+=random(50)) {
    for (var y = 0; y<=mouseY; y+=random(50)) {
      for (var z = 0; z<=random(450); z+=random(10)) {
        for (var a = 0; a<=random(800); a+=random(10)) {
          fill(random(255), random(255), random(255))
          quad(x, y, random(800), random(450), random(800), random(a), random(800), random(450))
        }
      }
    }
  }
}
