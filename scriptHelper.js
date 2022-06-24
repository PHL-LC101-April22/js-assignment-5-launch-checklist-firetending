// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}



function validateInput(testInput) {
    let validationResponse = ["Empty", "Not a Number", "Is a Number"];
    if (testInput === "" || testInput === undefined) {
        return validationResponse[0];
    }
    if (isNaN(testInput)) {
        return validationResponse[1];
    } else {
        return validationResponse[2];
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let validationResponse = ["Empty", "Not a Number", "Is a Number"];
    let inputArray = [pilot, copilot, fuelLevel, cargoLevel];

    //validation
    let responseArray = [];
    for (let element of inputArray) {
        responseArray.push(validateInput(element));
    }
    if (responseArray.includes(validationResponse[0])) {
        alert("An input is required for every field!");
        return false;
    }
    if (responseArray[0] === validationResponse[2]) {
        alert("Pilot name may not be a number");
        return false;
    }
    if (responseArray[1] === validationResponse[2]) {
        alert("Co-Pilot name may not be a number");
        return false;
    }
    if (responseArray[2] === validationResponse[1]) {
        alert("Fuel level must be a number");
        return false;
    }
    if (responseArray[3] === validationResponse[1]) {
        alert("Cargo mass must be a number");
        return false;
    }

    //once validated
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`
    copilotStatus.innerHTML = `Co-Pilot ${copilot} is ready for launch`

    //fuel and cargo checks
    let checkStatus = 0;
    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = `Fuel level is too low to launch`;
        checkStatus -= 1;
    } else {
        fuelStatus.innerHTML = `Fuel level is ok; ready for launch`;
    }
    if (cargoLevel > 10000) {
        cargoStatus.innerHTML = `Cargo mass is too high to launch`;
        checkStatus -= 1;
    } else {
        cargoStatus.innerHTML = `Cargo mass is ok; ready for launch`;
    }
    if (checkStatus < 0) {
        statusNotReady();
    } else {
        statusReady();
    }

    function statusNotReady() {
        launchStatus.innerHTML = "Shuttle not ready for launch"
        launchStatus.style = "color: red";
        list.style.visibility = "visible";
        list.style.display = "block";
    }

    function statusReady() {
        launchStatus.innerHTML = "Shuttle is ready for launch"
        launchStatus.style = "color: green";
        list.style.visibility = "hidden";
        list.style.display = "none";

    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
