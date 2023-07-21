/* Rotating squares effect
 *
 * Samples a base image's luma to draw a low resolution version,
 * then scales the pixels of the low resolution version by
 * sampling a lookup video's luma.
 *
 * If you look at this code, it seems better written as a shader,
 * or in TouchDesigner, because the bulk of it is normalizing
 * coordinates and values. Left as a future exercise.
 *
 * Reference: https://www.behance.net/gallery/162774625/2022
 * Inspired by work by @andreiongd
 */

// if the base image pixel's luma is above LUMA_THRESHOLD, we'll
// draw a square in our low res version
const LUMA_THRESHOLD = 0.5;
// the scale factor of the base image to the low resolution version
const SAMPLE_SCALE = 10;
// print debugging information when set to true
const DEBUGGING = false;

let baseImg;
let lookupVideo;
let squares = [];

// GENerate Image InDeX, helper function which returns a function
// which converts x,y coords to p5 pixel array indices
const geniidx = (img) => (x, y) => (x + y * img.width) * 4;
// converts rgb values to a luma value using Rec. 601 weights
const rgb2luma = (r, g, b) => 0.2989 * r + 0.587 * g + 0.114 * b;
let iidx;

function preload() {
  baseImg = loadImage('2023.png');
}

function setup() {
  rectMode(RADIUS);

  baseImg.loadPixels();
  iidx = geniidx(baseImg);

  // Lets enumerate the squares we need to draw and save their coordinates
  for (let i = 0; i < baseImg.width; i += SAMPLE_SCALE) {
    for (let j = 0; j < baseImg.height; j += SAMPLE_SCALE) {
      const nluma =
        rgb2luma(
          baseImg.pixels[iidx(i, j)],
          baseImg.pixels[iidx(i, j) + 1],
          baseImg.pixels[iidx(i, j) + 2],
        ) / 255;
      // console.log(i, j, baseImg.width, iidx(i,j));
      if (nluma > LUMA_THRESHOLD) {
        squares = [...squares, {i, j}];
        // console.log(i, j, nluma);
      }
    }
  }

  createCanvas(1000, 1000);
  // console.log(squares);

  lookupVideo = createVideo('radial-sweep-slow-1000-24fps.mp4');
  lookupVideo.size(1000, 1000);
  lookupVideo.volume(0);
  lookupVideo.loop();
  lookupVideo.hide(); // hides the html video loader
}

function draw() {
  background(0);

  const frame = lookupVideo.get();
  frame.loadPixels();
  iidx = geniidx(frame);

  for (const square of squares) {
    // For every square we need to draw, lets scale the size of the square
    // by the corresponding lookupVideo pixel
    const {i: x, j: y} = square;
    const videoCoordx = map(x, 0, baseImg.width, 0, frame.width);
    const videoCoordy = map(y, 0, baseImg.height, 0, frame.height);
    const luma =
      rgb2luma(
        frame.pixels[iidx(videoCoordx, videoCoordy)],
        frame.pixels[iidx(videoCoordx, videoCoordy) + 1],
        frame.pixels[iidx(videoCoordx, videoCoordy) + 2],
      ) / 255;
    fill('white');
    noStroke();
    rect(x, y, Math.max(luma * 8, 1), Math.max(luma * 8, 1));
  }

  if (DEBUGGING) {
    fill('white');
    text(
      mouseX +
        ',' +
        mouseY +
        '\n' +
        rgb2luma(
          baseImg.pixels[iidx(mouseX, mouseY)],
          baseImg.pixels[iidx(mouseX, mouseY) + 1],
          baseImg.pixels[iidx(mouseX, mouseY) + 2],
        ) /
          255 +
        '\n' +
        rgb2luma(
          frame.pixels[iidx(mouseX, mouseY)],
          frame.pixels[iidx(mouseX, mouseY) + 1],
          frame.pixels[iidx(mouseX, mouseY) + 2],
        ) /
          255,
      10,
      10,
    );
  }
}
