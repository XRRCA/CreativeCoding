precision mediump float;

uniform sampler2D uTexture;
uniform vec2 uResolution;
uniform float uIntensity;

void main() {
  // Translate our coordinates from pixels with a top left origin to normalized coordinates in [0, 1] with a lower left origin for GLSL
  vec2 uv = gl_FragCoord.xy / uResolution;
  uv.y = 1.0 - uv.y;
  // and read our image's RGBA data with these normalized coordinates
  vec4 color = texture2D(uTexture, uv);

  // Calculate the brightness of the pixel
  float brightness = (color.r + color.g + color.b) / 3.0;

  // Blur the image by taking the average of the surrounding pixels
  float blur = 0.0;
  for (float x = -5.0; x <= 5.0; x++) {
    for (float y = -5.0; y <= 5.0; y++) {
      vec2 offset = vec2(x, y) / uResolution;
      blur += texture2D(uTexture, uv + offset).r;
    }
  }
  blur /= 121.0;

  // Add the blurred image back to the original, with some scaling to control the intensity
  vec4 bloom = vec4(color.rgb + uIntensity * blur, 1.0);
  
  // Output the final color
  gl_FragColor = mix(color, bloom, brightness);
}