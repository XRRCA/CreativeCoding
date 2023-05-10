const API_KEY = 'PUT API KEY HERE';

function downloadFile(file, name) {
  // Create a link and set the URL using `createObjectURL`
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = URL.createObjectURL(file);
  link.download = name;

  // It needs to be added to the DOM so it can be clicked
  document.body.appendChild(link);
  link.click();
}

const getDirections = () => {
  const directionsService = new google.maps.DirectionsService();
  directionsService
    .route({
      origin: {
        query: 'RCA Kensington',
      },
      destination: {
        query: 'N1 7GL',
      },
      travelMode: google.maps.TravelMode.WALKING,
    })
    .then((response) => {
      console.log(response);
      const points = response.routes[0].legs
        .flatMap((leg) => leg.steps)
        .flatMap((step) => step.path)
        .map((point) => [point.lat(), point.lng()]);
      console.log(points);
      points.map(async (point, i) => {
        const resp = await fetch(
          'https://maps.googleapis.com/maps/api/streetview?location=' +
            point[0] +
            ',' +
            point[1] +
            '&source=outdoor' +
            '&size=640x480&heading=90&key=' +
            API_KEY,
        );
        const blob = await resp.blob();
        //downloadFile(blob, `${i} ${point[0]},${point[1]}.jpg`);
        downloadFile(blob, `${i.toString().padStart(5, '0')}.jpg`);
      });
    });
};

window.getDirections = getDirections;
