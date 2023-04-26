let img;
let mic;
let page = 0;
const MAX_PAGE = 1;

function setup() {
  img = loadImage('image.png');
  mic = new p5.AudioIn();
  mic.start();

  createCanvas(400, 400);
}

function draw0() {
  let vol = mic.getLevel();
  background(220);
  image(img, 0, 0, 400, 400);
  textSize(vol * 2400);
  fill('red');
  text('Hello there', 200, 200);
}

function draw1() {
  background(220);
  text('whatsup', 200, 200);
}

function mousePressed() {
  if (mouseX <= 200) {
    page -= 1;
  } else {
    page += 1;
  }
  page = Math.max(Math.min(MAX_PAGE, page), 0);
}

function draw() {
  if (page == 0) {
    draw0();
  } else if (page == 1) {
    draw1();
  }
}
