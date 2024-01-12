let mySketch = function (p) {
  p.setup = function () {
    p.createCanvas(400, 400);
  };

  p.draw = function () {
    p.background(220);
    p.noStroke();
    p.fill('blue');
    p.circle(200, 200, 200);
  };
};

new p5(mySketch, 'sketch');
