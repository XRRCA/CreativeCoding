// Threshold shader example
// author: @mngyuan
// forked from https://editor.p5js.org/aferriss/sketches/wdT7661kh
//
// Mouse over to see a threshold effect.
// mouse x is the threshold, and mouse y is the feathering amount.
// Uncomment audio blocks to use microphone as the threshold level.

let simpleShader;
let img0;
let mic;

function preload() {
  // Load the shader
  simpleShader = loadShader('basic.vert', 'basic.frag');

  // Load the image
  img0 = loadImage('t1024.jpg');
  // audio: Request microphone from browser for mic interaction
  // mic = new p5.AudioIn();
  // mic.start();
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(500, 500, WEBGL);
}

function draw() {
  // shader() sets the active shader with our shader
  shader(simpleShader);

  // audio: Microphone based interaction
  // const vol = mic.getLevel();
  // const threshold = map(vol, 0, 1, 0.6, 0);
  // const feather = 0.2;
  // Mouse based interaction
  const threshold = map(mouseX, 0, width, 0, 1);
  const feather = map(mouseY, 0, height, 0, 0.2);

  // Send the image to the shader
  simpleShader.setUniform('uTexture0', img0);
  simpleShader.setUniform('uScale', [threshold, feather]);

  // rect gives us some geometry on the screen
  rect(0, 0, width, height);
}
