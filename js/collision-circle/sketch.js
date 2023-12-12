const circleCenter = [200, 200];
const circleRadius = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('white');
  fill('black');
  // Calculate the distance from the mouse position to the center of the circle
  if (dist(mouseX, mouseY, circleCenter[0], circleCenter[1]) < circleRadius) {
    // if the distance is less than the radius, we're within the circle
    noFill();
    stroke('black');
  }
  // p5's circle() function uses diameter, not radius, so we multiply by 2
  circle(circleCenter[0], circleCenter[1], circleRadius * 2);
}
