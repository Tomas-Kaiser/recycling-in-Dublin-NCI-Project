(function () {
  // Venues where you can recycle
  let venues = [
    {
      name: "Coolmine Recycling Centre",
      latitude: 53.384570,
      longtitude: -6.396490,
      address: "Coolmine Industrial Estate, Dublin"
    },
    {
      name: "Dublin City Council Bring Centre",
      latitude: 53.398567,
      longtitude: -6.202999,
      address: "15 Beechpark Ave, Kilmore, Dublin 5"
    },
    {
      name: "Grangegorman Bring Centre",
      latitude: 53.365801,
      longtitude: -6.277157,
      address: "7 Grangegorman Lower, Arran Quay, Dublin, 7"
    },
    {
      name: "Bottle Bank - Eastwall",
      latitude: 53.351529,
      longtitude: -6.234484,
      address: "E Wall Rd, East Wall, Dublin 3"
    },
    {
      name: "North Strand Recycling Centre",
      latitude: 53.361130,
      longtitude: -6.242858,
      address: "Shamrock Terrace, North Strand, Dublin 1"
    },
    {
      name: "Bottle Bank",
      latitude: 53.350679,
      longtitude: -6.282341,
      address: "Bridgefoot St, The Liberties, Dublin"
    },
    {
      name: "Ringsend Recycling Centre",
      latitude: 53.343835,
      longtitude: -6.214380,
      address: "Pigeon House Rd, Ringsend, Dublin 4"
    },
    {
      name: "Recycling bank",
      latitude: 53.336715,
      longtitude: -6.225613,
      address: "79 Lansdowne Rd, Dublin 4"
    },
    {
      name: "Bring Recycling Centre",
      latitude: 53.327245,
      longtitude: -6.207020,
      address: "sandymount, 143 R131, Dublin Southside, Dublin"
    },
    {
      name: "Bring Recycling Centre",
      latitude: 53.327142,
      longtitude: -6.264735,
      address: "Rathmines, Dublin"
    },
    {
      name: "Bring Recycling Centre",
      latitude: 53.328063,
      longtitude: -6.308545,
      address: "47 Windmill Rd, Crumlin, Dublin 12, D12 C6T8"
    },
    {
      name: "Windmill Road Civic Amenity Centre",
      latitude: 53.328063,
      longtitude: -6.289147,
      address: "244 Clogher Rd, Kimmage, Harold's Cross, Dublin 12"
    },
    {
      name: "Ballymount Civic Amenity Site",
      latitude: 53.312990,
      longtitude: -6.347168,
      address: "Ballymount Ave, Greenhills, Dublin 24"
    },
    {
      name: "Ballyogan Recycling Park",
      latitude: 53.257201,
      longtitude: -6.189479,
      address: "Ballyogan, Dublin"
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

  marker.bindPopup(`
  <h5>${venue.name}</h5>
  <address>${venue.address}</address>
  `);
  });
})();