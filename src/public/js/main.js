var map = L.map('map-template').setView([21.16729076280168, -100.93106351719217], 15);
L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
  maxZoom: 20,
   subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

const ruta = "";
// Socket Io
const socket = io.connect();

// Marker
const marker = L.marker([21.16729076280168, -100.93106351719217]); // kiev, ukraine
marker.bindPopup('UTNG');
map.addLayer(marker);


function ShowSelected(){
  
  var url = document.getElementById("producto").value;
  const ruta = omnivore.kml(url);
  map.addLayer(ruta);

  document.getElementById('quitar-marcadores').addEventListener('click', function() {
    map.removeLayer(ruta);
  });
}


// Geolocation
map.locate({enableHighAccuracy: true})
map.on('locationfound', (e) => {
  const coords = [e.latlng.lat + 0.5, e.latlng.lng + 0.5];
  const newMarker = L.marker(coords);
  newMarker.bindPopup('Tu hubicacion');
  map.addLayer(newMarker);
  socket.emit('userCoordinates', e.latlng);
});

// socket new User connected
socket.on('newUserCoordinates', (coords) => {
  console.log(coords);
  const newUserMarker = L.marker([coords.lat, coords.lng]);
  newUserMarker.bindPopup('Nuevo usuario');
  map.addLayer(newUserMarker);
}); 

