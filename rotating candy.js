let angle = 0; //rotation number

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(255, 105, 0, -dirX, -dirY, -1); // light that changes with the mouse position
  background(225);
  rectMode(CENTER)
  noStroke(); //doesn't show triangles
  fill(random(255), random(255), random(255))
  
  rotateX(angle*0.01)
  rotateY(angle*0.03)//       all rotation numbers
  rotateZ(angle*0.02)
  translate(mouseX - width/2, mouseY - height/2) // moves with the mouse
  sphere(110) // candy
  cone(100, 400) //wrapping
  cone(-100, -400) //wrapping
  
  angle += random(0.2)
}
