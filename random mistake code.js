//i made the stars twinkle and idk why 😍

var stars = []
function setup() {
  for(i=0; i<200; i+=2){
      stars[i] = random(windowHeight)
      stars[i+1] = random(windowWidth)
  }
  createCanvas(windowHeight, windowWidth);
}

function draw() {
  background(0);
    fill(255,255,255);
    for(i=0; i<200; i+=2){
      ellipse(stars[i], stars[i+1], random(5))
    }
}
