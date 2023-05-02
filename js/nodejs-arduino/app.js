const http = require('http');
const fs = require('fs');

const index = fs.readFileSync('index.html');

const {SerialPort} = require('serialport');
const {ReadlineParser} = require('@serialport/parser-readline');

const port = new SerialPort({
  path: '/dev/tty.usbmodem1401', // Change to the proper path
  baudRate: 9600,
});
const parser = port.pipe(new ReadlineParser({delimiter: '\r\n'}));
const server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(index);
});
const io = require('socket.io')(server);

parser.on('data', function (data) {
  console.log(data);
  io.emit('data', data);
});
server.listen(8000);
io.on('connection', function (data) {
  console.log('Node.js is listening!');
});
