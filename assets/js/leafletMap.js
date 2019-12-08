// Venues where you can recycle
let venues = [{
   name: "Coolmine Recycling Centre",
   latitude: 53.384570,
   longtitude: -6.396490
 },
 {
   name: "Coolmine Recycling Centre",
   latitude: 53.398567,
   longtitude: -6.202999
 },
 {
   name: "Grangegorman Bring Centre",
   latitude: 53.365801,
   longtitude: -6.277157
 },
 {
   name: "Bottle Bank - Eastwall",
   latitude: 53.351529,
   longtitude: -6.234484
 },
 {
   name: "North Strand Recycling Centre",
   latitude: 53.361130,
   longtitude: -6.242858
 },
 {
   name: "Bottle Bank",
   latitude: 53.350679,
   longtitude: -6.282341
 },
 {
   name: "Ringsend Recycling Centre",
   latitude: 53.343835,
   longtitude: -6.214380
 },
 {
   name: "Recycling bank",
   latitude: 53.336715,
   longtitude: -6.225613
 },
 {
   name: "Interrec Ireland Recycling Centre",
   latitude: 53.336715,
   longtitude: -6.225613
 },
 {
   name: "Bring Recycling Centre",
   latitude: 53.327245,
   longtitude: -6.207020
 },
 {
   name: "Bring Recycling Centre",
   latitude: 53.327142,
   longtitude: -6.264735
 },
 {
   name: "Bring Recycling Centre",
   latitude: 53.328063,
   longtitude: -6.308545
 },
 {
   name: "Windmill Road Civic Amenity Centre",
   latitude: 53.328063,
   longtitude: -6.289147
 },
 {
   name: "Ballymount Civic Amenity Site",
   latitude: 53.312990,
   longtitude: -6.347168
 },
 {
   name: "Ballyogan Recycling Park",
   latitude: 53.257201,
   longtitude: -6.189479
 }
 
 ];

// Initialize the map
var mymap = L.map('mapid').setView([53.349804, -6.260310], 11);

// get layer
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18,
 id: 'mapbox/streets-v11',
 accessToken: 'pk.eyJ1IjoidG9tYXMta2Fpc2VyIiwiYSI6ImNrM3hrMjh6dzBjdnAzcnM4dDc3em52M3kifQ.DYyTeQdTHi3e0A43TjFBXw'
}).addTo(mymap);

// Iterate through the venues array and show the marks on the map
venues.map(venue => {
 var marker = L.marker([venue.latitude, venue.longtitude]).addTo(mymap);

 marker.bindPopup(`<h5>${venue.name}</h5>`);
});