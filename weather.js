const API_KEY = "a409e9300791ac193b803e099caeef8b";
const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("Can not access geo location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucess, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        askForCoords();
    } else {
        // getweather
    }
}

function init() {
    loadCoords();

}

init();