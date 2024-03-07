// adapted from https://www.reddit.com/r/p5js/comments/rhzvvr/a_flood_fill_algorithm_i_couldnt_find_any_for_p5/

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

function expandToNeighbours(queue, current) {
  x = current.x;
  y = current.y;

  if (x - 1 > 0) {
    queue.push(createVector(x - 1, y));
  }

  if (x + 1 < width) {
    queue.push(createVector(x + 1, y));
  }

  if (y - 1 > 0) {
    queue.push(createVector(x, y - 1));
  }

  if (y + 1 < height) {
    queue.push(createVector(x, y + 1));
  }

  return queue;
}

function floodSearch(img, seed, predicate) {
  let needle;
  img.loadPixels();

  index = 4 * (width * seed.y + seed.x);
  seedColor = [
    img.pixels[index],
    img.pixels[index + 1],
    img.pixels[index + 2],
    img.pixels[index + 3],
  ];

  let queue = [];
  queue.push(seed);
  let visited = new Set();

  while (queue.length) {
    let current = queue.shift();
    index = 4 * (width * current.y + current.x);
    let color = [
      img.pixels[index],
      img.pixels[index + 1],
      img.pixels[index + 2],
      img.pixels[index + 3],
    ];

    if (
      !arrayEquals(color, seedColor) ||
      visited.has(`${current.x},${current.y}`)
    ) {
      // not inside the area we want to fill
      continue;
    }
    visited.add(`${current.x},${current.y}`);

    const testResult = predicate(current.x, current.y);
    if (predicate(current.x, current.y)) {
      return testResult;
    }

    queue = expandToNeighbours(queue, current);
  }
}
