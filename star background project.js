var stars = []
function setup() {
  for(i=0; i<200; i+=2){
      stars[i] = random(windowWidth)
      stars[i+1] = random(windowHeight)
  }
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
    fill(random(255),random(255),random(255));
    stroke(random(255),random(255),random(255))
    strokeWeight(0.1)
    for(i=0; i<200; i+=1){
      ellipse(stars[i], stars[i+1], random(5)) //stars !!
    }
    if (mouseIsPressed == true){
      for(i=0; i<200; i+=10){
        ellipse(stars[i], stars[i+1], random(20)) //supernovas or something idk
      }
    }
}
