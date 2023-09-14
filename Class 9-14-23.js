//Made confetti 🎉

let shapeX = 100;
let shapeY = 100;
let randomVal = 1;
let r,g,b,r2,g2,b2,opacityVal = 0

function mousePressed() {
  shapeX = random(0,700);
  shapeY = random(0,600);
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
  createCanvas(700,600);
  background(255,255,255);
}
function draw() {
  circle(shapeX,shapeY,100);
  fill(r,g,b,opacityVal);
  //shapeX = shapeX + randomVal;
  stroke(r2,g2,b2);
}



//Same code, but make the circle a quadrilateral so it looks like an explosion of color

let shapeX = 100;
let shapeY = 100;
let randomVal = 1;
let r,g,b,r2,g2,b2,opacityVal = 0

function mousePressed() {
  shapeX = random(0,700);
  shapeY = random(0,600);
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
  createCanvas(700,600);
  background(255,255,255);
}
function draw() {
  quad(shapeX,shapeY,400,500,shapeY,shapeX,493,684);
  fill(r,g,b,opacityVal);
  shapeX = shapeX + randomVal;
  stroke(r2,g2,b2);
}



//Custom cursor thing??

let canvasLength = 700
let canvasWidth = 600

function setup() {
  createCanvas(canvasLength,canvasWidth);
  background(255,255,255);
}

function draw() {
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  if (mouseX < 350 && mouseY < 300) {
    cursor(WAIT);
  } else if (mouseX > 350 && mouseY < 300) {
    cursor(MOVE);
  } else if (mouseX > 350 && mouseY > 300) {
    cursor('cell');
  } else {
    cursor('grab');
  }
}
