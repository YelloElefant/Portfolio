let locationWrapper = document.getElementById("locationWrapper");
let locationEle = document.getElementById("location");

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



    locationEle.innerHTML = clientLocation.country + " , " + clientLocation.regionName + " , " + clientLocation.city
}
getLocation();

