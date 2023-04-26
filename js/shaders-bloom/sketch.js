let myShader;
let img0;

function preload() {
  bloomShader = loadShader('bloom.vert', 'bloom.frag');
  img0 = loadImage("t1024.jpg");
}

function setup() {
  // WEBGL mode must be enabled for shaders
  createCanvas(500, 500, WEBGL);
}

function draw() {
  // Use mouse X coordinates to control the intensity of the effect
  const mx = map(mouseX, 0, width, 0, 1);
  shader(bloomShader);
  // Pass our values over GLSL land as 'uniforms'
  bloomShader.setUniform('uTexture', img0);
  bloomShader.setUniform('uResolution', [width, height]);
  bloomShader.setUniform('uIntensity', mx);
  // Must create some geometry otherwise nothing will render
  quad(-1, -1, 1, -1, 1, 1, -1, 1);
}