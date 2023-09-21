# Arduino→Node Websocket Example

Connects a potentiometer's output to a web page running on a computer.

## Using this example

Quickstart: Run `npm install` then `node app.js`. Plug in Arduino and upload sketch and open `localhost:8000` on your browser.

Prerequisites:

1. Install node

Detailed run instructions:

1. Open this folder in VSCode
2. In the Terminal, run `npm install`
3. Replace the correct path your Arduino board (you can find this in Arduino IDE) in `app.js`
4. With `app.js` open, go to the Run and Debug panel and press Run and Debug -> Nodejs
5. Open `localhost:8000` in your browser

You may need to disconnect (close) the Arduino IDE Serial Monitor otherwise it will hog the serial connection to your Arduino.

## Schematic

[![Arduino schematic showing a potentiometer connected to analog port 3](https://user-images.githubusercontent.com/3166481/225881787-4cc9e33f-ddb4-4e5a-b4f2-20a7048f5aea.png)](https://www.circuito.io/app?components=512,11021,172542)

This example consists of an Arduino sketch, nodejs server, and html page. The data flows from a program running on Arduino using serial over USB to a listening nodejs server, which forwards the incoming serial data using websockets to a browser.

```
Arduino   →    Node     →     Browser
        Serial      Websocket
         USB         Internet
```

## Further

[A version of this example but for outputting text on successive button presses](https://gist.github.com/XRRCA/1dbf8244d448157f4d2cd8d82dabcbde)
[p5.js Official socket.io node.js example](https://github.com/processing/p5.js/wiki/p5.js,-node.js,-socket.io)
