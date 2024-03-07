// based on the p5 example load and display image:
// https://p5js.org/examples/image-load-and-display-image.html

const rgb2luma = (r, g, b) => 0.2989 * r + 0.587 * g + 0.114 * b;
let img;
let mask;
let displayText = "";
let displayTimeout;

const setDisplayText = (text) => {
  displayText = text;
  // Reset the displayed text after 3 seconds
  clearTimeout(displayTimeout); // remove any previous pending resets
  displayTimeout = setTimeout(() => (displayText = ""), 3000);
};

const PLACING_MARKERS = false;
const markers = [
  { loc: [95, 409], name: "Potato and Mushroom Roast" },
  { loc: [556, 547], name: "Fancy pants plates" },
  { loc: [432, 552], name: "Cutlery" },
  { loc: [385, 337], name: "Bruschetta Caprese" },
  { loc: [252, 275], name: "Fig, grape, and pears" },
  { loc: [576, 384], name: "Orange Spa Water" },
  { loc: [694, 340], name: "Couscous with Egg Casserole" },
  { loc: [935, 291], name: "Orange juice fortified with vitamin D" },
  {
    loc: [926, 391],
    name: "Pure unadulterated moonshine. Jimmy would be proud.",
  },
  { loc: [1047, 477], name: "Salad" },
  { loc: [1064, 157], name: "Dead fire burned bird carcass" },
  { loc: [73, 165], name: "More spa water but this time just for me" },
  { loc: [64, 303], name: "Shiso leaves on a cutting board..?" },
];

function setup() {
  createCanvas(1125, 750);
  img = loadImage("pexel.jpeg"); // Load the image
  mask = loadImage("pexel_mask.jpg");
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  image(img, 0, 0);
  fill('white');
  stroke('black');
  textAlign(CENTER);
  textSize(48);
  text(displayText, width / 2, height / 2);
}

function mousePressed() {
  if (PLACING_MARKERS) {
    // copy down these coordinates to create an array of markers
    setDisplayText([mouseX, mouseY]);
  } else {
    let c = rgb2luma(...mask.get(mouseX, mouseY));

    // let's just use a generous threshold
    if (c < 128) {
      // if clicked on a part that's in our mask, find the corresponding marker
      const marker = floodSearch(mask, { x: mouseX, y: mouseY }, (x, y) =>
        markers.find((m) => m.loc[0] == x && m.loc[1] == y)
      );

      if (marker) {
        setDisplayText(marker.name);
      } else {
        displayText = "";
      }
    }
  }
}
