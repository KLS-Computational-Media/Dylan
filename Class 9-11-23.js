//I made rectangles in each corner (and also made it so that the outline doesn't get cut off

function setup() {
  createCanvas(401, 401);
  background(255,255,255);
}
function draw() {
  rect(1, 1, 55, 55);
  rect(345, 1, 55, 55);
  rect(1, 345, 55, 55);
  rect(345, 345, 55, 55);
}

//I made circles move to the right and spawn in a new random location every time you click your mouse

let shapeX = 100;
let shapeY = 100;

function mousePressed() {
  shapeX = random(0,600);
  shapeY = random(0,600);
}

function setup() {
  createCanvas(700,600);
  background(255,255,255);
}
function draw() {
  circle(shapeX,shapeY,100);
  fill(50,209,184);
  shapeX = shapeX + 1
  stroke(40,247,135)
}

