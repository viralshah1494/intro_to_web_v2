const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const addNewDog = document.querySelector(".add-doggo");
const doggosDiv = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      console.log(processedResponse);
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Random dog image";
      doggosDiv.appendChild(img);
    });
}

addNewDog.addEventListener("click", addNewDoggo);
