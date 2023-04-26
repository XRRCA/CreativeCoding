const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html');

const {SerialPort} = require('serialport');
const {ReadlineParser} = require('@serialport/parser-readline');
//const port = new SerialPort({ path: '/dev/ROBOT', baudRate: 14400 })

const port = new SerialPort({
  path: '/dev/cu.usbmodem101', // Change to the proper path
  baudRate: 9600,
  dataBits: 8,
  parity: 'none',
  stopBits: 1,
  flowControl: false,
});

const parser = port.pipe(new ReadlineParser({delimiter: '\r\n'}));

port.pipe(parser);

const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
});

const io = require('socket.io')(server);

io.on('connection', function (data) {
  console.log('Node.js is listening!');
});

parser.on('data', function (data) {
  console.log(data);

  io.emit('data', data);
});

server.listen(8000);
