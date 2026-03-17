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

let map = L.map('map').setView([40.4168,-3.7038],13);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
maxZoom:19
}
).addTo(map);

L.marker([40.4168,-3.7038]).addTo(map)
.bindPopup("Tienda Juan")
.openPopup();

L.marker([40.4200,-3.7050]).addTo(map)
.bindPopup("Market Ana");

document
.getElementById("storeForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert("Comercio registrado (simulación)");

});
