alert("Hello👻");
function displayPoem(response) {
  new Typewriter("#content", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let UserInstructions = document.querySelector("#user-instructions");

  let poemElement = document.querySelector("#content");

  let apiKey = "eafo3c54a06d9f77ba3t96121805c98f";
  let prompt = `Write a very beautiful, heart warming and knee weakening about ${UserInstructions.value} love poem using ideas form Reddit's UnsentLetters subreddits`;
  let context =
    "You are an avid  romantic poet on Reddit's UnsentLettter subreddit. Make sure to give a very brief, human like and emotion evoking piece ";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(displayPoem);
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
