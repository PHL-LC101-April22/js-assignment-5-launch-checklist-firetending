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
    }
    if (Number(testInput) >= 0 && Number(testInput) + 1 >= 0) {
        return validationResponse[2];
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let validationResponse = ["Empty", "Not a Number", "Is a Number"];
    let inputArray = [pilot, copilot, fuelLevel, cargoLevel];
    let responseArray = [];
    for (let element of inputArray) {
        responseArray.push(validateInput(element));
    }
    if (responseArray.includes(validationResponse[0])) {
        alert("An input is required for every field!");
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
