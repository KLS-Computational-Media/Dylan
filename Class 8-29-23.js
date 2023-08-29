//i made a cone that spun super fast with a lime green background 😇






let detailX;
function setup() {
  createCanvas(600, 500, WEBGL);
  detailX = createSlider(3, 16, 3);
  detailX.position(10, height + 5);
  detailX.style('width', '80px');
  describe(
    'a rotating white cone with limited X detail, with a slider that adjusts detailX'
  );
}

function draw() {
  background(86, 245, 56);
  rotateX(millis()/ 1);
  rotateY(millis() / 1);
  rotateZ(millis() / 1);
  cone(100, 300, detailX.value(), 8);
}
