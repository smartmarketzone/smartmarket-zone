function searchProduct(){

let product = document.getElementById("productInput").value;

let results = document.getElementById("resultsList");

results.innerHTML = "";

let stores=[
{store:"Tienda Juan",price:"$2.10",distance:"250m"},
{store:"Market Ana",price:"$1.95",distance:"400m"},
{store:"MiniMarket Sol",price:"$2.05",distance:"180m"}
];

stores.forEach(function(item){

let li=document.createElement("li");

li.textContent =
product + " - " + item.store + " - " + item.price + " - " + item.distance;

results.appendChild(li);

});

}

let map = L.map('map').setView([10.17, -68.03], 9);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
maxZoom:18
}
).addTo(map);

// Valencia
L.marker([10.162, -68.007]).addTo(map)
.bindPopup("Valencia - Capital de Carabobo");

// Puerto Cabello
L.marker([10.475, -68.012]).addTo(map)
.bindPopup("Puerto Cabello");

// Naguanagua
L.marker([10.26, -68.01]).addTo(map)
.bindPopup("Naguanagua");

// Guacara
L.marker([10.23, -67.88]).addTo(map)
.bindPopup("Guacara");

let bounds = [
[9.77, -68.56],
[10.66, -67.39]
];

map.setMaxBounds(bounds);
