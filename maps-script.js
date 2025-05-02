
let map;

async function initMap() {
  // The location of Stockholm - Segelstorgsfontänen
  const position = { lat: 59.33258, lng: 18.0652 };
  const { Map, InfoWindow} = await google.maps.importLibrary("maps");
  const infoWindow = new InfoWindow();

  map = new Map(document.getElementById("map"), {
    zoom: 20,
    center: position,
    mapId: "Google-Maps-Clone",
  });

  const marker = new google.maps.Marker({
    position: position,
    map,
    title: "hello",
    icon: {
      url: "mymarker.svg",
      scaledSize: new google.maps.Size(64, 32)
    },
    animation: google.maps.Animation.DROP,
    draggable: true,

  });




}


initMap();

