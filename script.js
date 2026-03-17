function searchProduct(){

// MAPA CARABOBO LIMPIO

let map = L.map('map').setView([10.17, -68.03], 9);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
maxZoom: 18
}
).addTo(map);

// MARCADORES

L.marker([10.162, -68.007]).addTo(map)
.bindPopup("Valencia - Capital de Carabobo");

L.marker([10.475, -68.012]).addTo(map)
.bindPopup("Puerto Cabello");

L.marker([10.26, -68.01]).addTo(map)
.bindPopup("Naguanagua");

L.marker([10.23, -67.88]).addTo(map)
.bindPopup("Guacara");

// LIMITES

let bounds = [
[9.77, -68.56],
[10.66, -67.39]
];

map.setMaxBounds(bounds);
