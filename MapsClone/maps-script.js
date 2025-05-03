let map;
let marker;
let infoWindow;
let center = { lat: 59.33258, lng: 18.0652 };
async function initMap() {

    const [{ Map }, { AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary("marker"),
        google.maps.importLibrary("places")
    ]);

    map = new google.maps.Map(document.getElementById('map'), {
        center,
        zoom: 13,
        mapId: '4504f8b37365c3d0',
        mapTypeControl: false,
    });

    const placeAutocomplete = new google.maps.places.PlaceAutocompleteElement();

    placeAutocomplete.id = 'place-autocomplete-input';
    placeAutocomplete.locationBias = center;
    const card = document.getElementById('place-autocomplete-card');

    card.appendChild(placeAutocomplete);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(card);
    const icon = document.createElement("img");
    icon.src = "mymarker.svg";
    icon.style.width = "32px";
    icon.style.height = "32px";
    marker = new google.maps.marker.AdvancedMarkerElement({
        map,
        content: icon,
    });



    infoWindow = new google.maps.InfoWindow({});
    placeAutocomplete.addEventListener('gmp-select', async ({ placePrediction }) => {
        const place = placePrediction.toPlace();
        await place.fetchFields({ fields: ['displayName', 'formattedAddress', 'location'] });
        if (place.viewport) {
            map.fitBounds(place.viewport);
        }
        else {
            map.setCenter(place.location);
            map.setZoom(17);
        }
        let content = '<div id="infowindow-content">' +
            '<span id="place-displayname" class="title">' + place.displayName + '</span><br />' +
            '<span id="place-address">' + place.formattedAddress + '</span>' +
            '</div>';
        updateInfoWindow(content, place.location);
        marker.position = place.location;
    });

    
}
// Helper function to create an info window.
function updateInfoWindow(content, center) {
    infoWindow.setContent(content);
    infoWindow.setPosition(center);
    infoWindow.open({
        map,
        anchor: marker,
        shouldFocus: false,
    });
}
initMap();