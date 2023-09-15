//I made something?? dont know how to describe it

let shapeX = 100;
let shapeY = 100;
let speed = 3;
let randomVal = 1;
let r,g,b,r2,g2,b2,opacityVal = 0

function mousePressed() {
  shapeX = random(0,700);
  shapeY = random(0,592);
  speed = random(1,5);
  randomVal = random(0,1);
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
  r2 = random(0,255);
  g2 = random(0,255);
  b2 = random(0,255);
  opacityVal = random(5,20)
}

function setup() {
  createCanvas(700,592);
  background(255,255,255);
}
function draw() {
  circle(shapeX,shapeY,100);
  fill(r,g,b);
  stroke(r2,g2,b2);
  
  if (shapeX > width) {
    speed = random(-5,-1)
  }
  if (shapeY > height) {
    speed = random(-5,-1)
  }
  if (shapeX < 0) {
    speed = random(1,5)
  }
  if (shapeY < 0) {
    speed = random(1,5)
  }
  shapeX = shapeX + speed
  shapeY = shapeY + speed
}
