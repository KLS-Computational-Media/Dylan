//i based this off of the first 4 seconds of this video https://www.youtube.com/watch?v=UB0vbEhohh0

//creating canvas + slider
function setup() { 
  createCanvas(720, 592);
  slider = createSlider(0, 200, 0);
  slider.position(260,550);
  slider.style('width', '200px');
} 

function draw() {
  background(255,255,255);
  let val = slider.value() //setting the variable
  if (550 < val*3) {
    fill(219, 0, 138)
    ellipse(361, 296, 200, 200); //heejin
    
  } else if (500 < val*3) {
    fill(251, 241, 13);
    ellipse(361, 296, 200, 200); //hyunjin
    
  } else if (450 < val*3) {
    fill(8, 188, 52);
    ellipse(361, 296, 200, 200); //haseul
    
  } else if (400 < val*3) {
    fill(249, 192, 197);
    ellipse(361, 296, 200, 200); //yeojin
    
  } else if (350 < val*3) {
    fill(173, 0, 214);
    ellipse(361, 296, 200, 200); //vivi
    
  } else if (300 < val*3) {
    fill(197, 1, 17);
    ellipse(361, 296, 200, 200); //kim lip
    
  } else if (250 < val*3) {
    fill(6, 0, 201);
    ellipse(361, 296, 200, 200); //jinsoul
    
  } else if (200 < val*3) {
    fill(246, 148, 7);
    ellipse(361, 296, 200, 200); //choerry
    
  } else if (150 < val*3) {
    fill(110, 0, 1);
    ellipse(361, 296, 200, 200); //yves
    
  } else if (100 < val*3) {
    fill(248, 163, 125);
    ellipse(361, 296, 200, 200); //chuu
    
  } else if (50 < val*3) {
    fill(18, 214, 163);
    ellipse(361, 296, 200, 200); //go won
    
  } else if (0 < val*3) {
    fill(0);
    ellipse(361, 296, 200, 200); //hyeju
  }
  noStroke()
  fill(255,255,255)
  ellipse(561-val, 296, 200, 200); //eclipse
}
