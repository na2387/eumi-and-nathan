// Initialize and add the map
function initMap() {
    // The location of Portico
    const portico = { lat: 40.05071202008899, lng: -75.16789842432206 };
    const philly = { lat: 39.9999999999, lng: -75.16235161616885 };
    // The map, centered at Portico
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: philly,
    });
    // The marker, positioned at Portico
    const marker = new google.maps.Marker({
        position: portico,
        map: map,
    });
}