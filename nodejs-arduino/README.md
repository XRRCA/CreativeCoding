# Arduino→Node Websocket Example

Connects a potentiometer's output to a web page running on a computer.

## Using this example

To get started, run `npm install` then `node app.js`.

## Schematic

[![Arduino schematic showing a potentiometer connected to analog port 3](https://user-images.githubusercontent.com/3166481/225881787-4cc9e33f-ddb4-4e5a-b4f2-20a7048f5aea.png)](https://www.circuito.io/app?components=512,11021,172542)

```
Arduino   →    Node     →     Browser
        Serial      Websocket
         USB         Internet
```
