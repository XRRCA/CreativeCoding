let compass;
let motion = false, orientation = false, ios = false;

// below code is essential for ios13 and above. 
// A click is needed for the device to request permission 
if (typeof DeviceOrientationEvent.requestPermission === 'function') {
  document.body.addEventListener('click', function() {
    if (!orientation) {
      DeviceOrientationEvent.requestPermission()
        .then(function() {
          console.log('DeviceOrientationEvent enabled');
          window.addEventListener("deviceorientation", handler, true);
          orientation = true;
          ios = true;
        })
        .catch(function(error) {
          console.warn('DeviceOrientationEvent not enabled', error);
        })
    }
  })
}

// if you also wanted to add motion tracking...
if (typeof DeviceMotionEvent.requestPermission === 'function') {
  if (!motion) {
    document.body.addEventListener('click', function() {
      DeviceMotionEvent.requestPermission()
        .then(function() {
          console.log('DeviceMotionEvent enabled');

          motion = true;
          ios = true;
        })
        .catch(function(error) {
          console.warn('DeviceMotionEvent not enabled', error);
        })
    })
  }
}

function handler(e) {
  compass = e.webkitCompassHeading || Math.abs(e.alpha - 360);
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0);
  push();
  translate(200, 200);
  rotate(-compass);
  fill('white');
  rect(0, 0, 20, 100);
  fill('red');
  rect(0, -25, 20, 50);
  pop();
  console.log(compass);
}