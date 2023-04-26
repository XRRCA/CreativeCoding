let basicShader;
let img0;

function preload() {
  basicShader = loadShader('basic.vert', 'basic.frag');
  img0 = loadImage("t1024.jpg");
}

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {
  shader(basicShader);
  basicShader.setUniform('uTexture', img0);
  basicShader.setUniform('uResolution', [width, height]);
  quad(-1, -1, 1, -1, 1, 1, -1, 1);
}