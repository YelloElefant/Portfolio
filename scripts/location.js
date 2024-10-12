let locationWrapper = document.getElementById("locationWrapper");
let long = document.getElementById("long");
let lat = document.getElementById("lat");

async function fetchMyIp() {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
}

async function getLocation() {
    let clientIp = await fetchMyIp();


    const clientLocation = await fetch("http://ip-api.com/json/" + clientIp)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });




    long.innerHTML = clientLocation.lon;
    lat.innerHTML = clientLocation.lat;
}
getLocation();

