precision mediump float;

varying vec2 vTexCoord;
uniform sampler2D uTexture;

void main() {
  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;
  gl_FragColor = texture2D(uTexture, uv);
}