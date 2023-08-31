//I made a program that lets you create a custom piece of art that looks like an iphone background from 2016 ❤️

function setup() {
  createCanvas(700, 600);
  background(255,255,255);
}
function draw() {
  quad(mouseX, 0, mouseX, 700, 0, mouseY, 600, mouseY);
  if (mouseIsPressed) {
    fill(554,28,300, 6);
    noStroke()
  } else {
    fill(123,287,467, 6);
    noStroke()
 
}}
