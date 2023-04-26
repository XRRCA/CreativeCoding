const IMAGE_COUNT = 299;

const canvas = document.getElementById('main-canvas');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
const canvas_w = canvas.clientWidth;
const canvas_h = canvas.clientHeight;
const ctx = canvas.getContext('2d');
const images = Array(IMAGE_COUNT).fill();
images.forEach((_, i, arr) => {
  arr[i] = new Image();
  arr[i].src = `imgs/${i + 1}.jpg`;
});

images[0].addEventListener('load', (e) => {
  ctx.drawImage(images[0], 0, 0, canvas_w, canvas_h);
});

canvas.addEventListener('pointermove', (event) => {
  const idx = Math.floor((IMAGE_COUNT * event.offsetX) / canvas_w);
  ctx.drawImage(images[idx], 0, 0, canvas_w, canvas_h);
});
