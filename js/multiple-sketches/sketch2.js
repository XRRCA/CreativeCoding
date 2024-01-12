let mySketch2 = function (p) {
  p.setup = function () {
    p.createCanvas(400, 400);
  };

  p.draw = function () {
    p.background('black');
    p.noStroke();
    p.fill('green');
    p.circle(200, 200, 200);
  };
};

new p5(mySketch2, 'sketch2');
