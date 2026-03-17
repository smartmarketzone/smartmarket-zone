let map = L.map('map').setView([10.17, -68.03], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom:18
}).addTo(map);

L.marker([10.162, -68.007]).addTo(map)
.bindPopup("Valencia");
