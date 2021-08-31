const characterName = document.getElementById("character-name");
const characterStatus = document.getElementById("character-status");
const characterSpecies = document.getElementById("character-species");
const characterGender = document.getElementById("character-gender");
const characterImage = document.getElementById("character-image");
const characterOrigin = document.getElementById("character-origin");
const characterLocation = document.getElementById("character-location");
const characterCount = "671";

//Fetch character JSON data via 'id' parameter.
function getCharacter(id) {
  fetch("https://rickandmortyapi.com/api/character/" + id)
    .then((response) => response.json())
    .then((data) => displayCharacterInformation(data))
    .catch((exception) => handleError(exception));
}

//Populate UI via 'jsonData' paramater.
function displayCharacterInformation(jsonData) {
  characterName.innerText = "Name: " + jsonData["name"];
  characterStatus.innerText = "Status: " + jsonData["status"];
  characterSpecies.innerText = "Species: " + jsonData["species"];
  characterGender.innerText = "Gender: " + jsonData["gender"];
  characterImage.src = jsonData["image"];
  characterOrigin.innerText = "Origin: " + jsonData["origin"]["name"];
  characterLocation.innerText = "Location: " + jsonData["location"]["name"];
}

function handleError(error) {
  //console.log(error);
  characterName.innerText = "Network Error :( try again";
}

//Generate random number between 1 and characterCount.
function generateRandomID() {
  return Math.floor(Math.random() * characterCount) + 1;
}

//Fetches a new character with a randomly generated id.
function fetchNewCharacter() {
  getCharacter(generateRandomID().toString());
}

//Try to fetch a new character.
fetchNewCharacter();
