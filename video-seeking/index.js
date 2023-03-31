const IMAGE_COUNT = 299;

const canvas = document.getElementById('main-canvas');
const ctx = canvas.getContext('2d');
const images = Array(IMAGE_COUNT).fill();
images.forEach((_, i, arr) => {
  arr[i] = new Image();
  arr[i].src = `imgs/${i + 1}.jpg`;
});

images[0].addEventListener('load', (e) => {
  ctx.drawImage(images[0], 0, 0, 400, 400);
});

canvas.addEventListener('mousemove', (event) => {
  const idx = Math.floor((IMAGE_COUNT * event.offsetX) / 400);
  ctx.drawImage(images[idx], 0, 0, 400, 400);
});
