function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  fill(40);
  rect(200, 200, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

document.addEventListener(
  'keydown',
  (e) => {
    if (e.key === 'Enter') {
      toggleFullScreen();
    }
  },
  false,
);
