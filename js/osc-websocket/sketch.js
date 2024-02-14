const oscPort = new osc.WebSocketPort({
  url: 'ws://localhost:8081',
});

oscPort.on('message', (msg) => {
  console.log('message', msg);
});
oscPort.on('close', () => {});

oscPort.open();

oscPort.socket.onmessage = function (e) {
  console.log('message', e);
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}