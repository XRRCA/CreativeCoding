precision mediump float;

varying vec2 vTexCoord;
uniform sampler2D uTexture0;

uniform vec2 uScale;

void main() {

  vec2 uv = vTexCoord;
  uv.y = 1.0 - uv.y;
  
  // Sample our texture
  vec4 color = texture2D(uTexture0, uv);
  
  // Convert to gray scale
  // color.rgb = vec3((color.r + color.g + color.b) / 3.0);
  
  // we will plug these into smoothstep
  // Colors less than edge will be black
  // Colors brighter than edge + feather will be white
  // Colors in between edge and edge plus feather will be grayscale
  float edge = uScale.x;
  float feather = uScale.y;
  
  // Smoothstep the colors
  // color.rgb = smoothstep(edge, edge + feather, color.rgb);
  // Smoothstep just red for a lighting effect
  color.r = smoothstep(edge, edge + feather, color.r);
  
  // You could also just do step instead
  // color.rgb = step(edge, color.rgb);
  
  // Send the color to the screen
  gl_FragColor = color;

}
