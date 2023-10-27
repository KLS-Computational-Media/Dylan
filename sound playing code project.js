let soundA, soundB, soundC, soundD, soundE;

function preload() {
  soundA = loadSound('sound.mp3');
  soundB = loadSound('sound2.mp3');
  soundC = loadSound('sound3.mp3');
  soundD = loadSound('sound4.mp3');
  soundE = loadSound('sound5.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawEllipse() {
  fill(random(255), random(255), random(255));
  let x = random(width);
  let y = random(height);
  ellipse(x, y, 50, 50);
}

function draw() {
  //background(255);
}

function keyPressed() {
  if (key === 'a') {
    soundA.play();
    drawEllipse();
  } else if (key === 'b') {
    soundB.play();
    drawEllipse();
  } else if (key === 'c') {
    soundC.play();
    drawEllipse();
  } else if (key === 'd') {
    soundD.play();
    drawEllipse();
  } else if (key === 'e') {
    soundE.play();
    drawEllipse();
  }
}
