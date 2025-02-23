alert("Hello👻");

function generatePoem(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");
  let loadingElement = document.querySelector("#loading");
  let poemElement = document.querySelector("#content");
  let responseBox = document.querySelector("#response-box");

  loadingElement.style.display = "block";
  poemElement.innerHTML = "";

  let apiKey = "eafo3c54a06d9f77ba3t96121805c98f";
  let prompt = `Write a very beautiful, heartwarming, and knee-weakening love poem about ${userInstructions.value} using ideas from Reddit's UnsentLetters subreddit.`;
  let context =
    "You are an avid romantic poet on Reddit's UnsentLetters subreddit. Make sure to give a very brief, human-like, and emotion-evoking piece.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayPoem);
}

function displayPoem(response) {
  let poemElement = document.querySelector("#poem-content");
  let responseBox = document.querySelector("#response-box");
  responseBox.style.display = "block";
  new Typewriter("#poem-content", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  let userInput = document
    .querySelector("#user-instructions")
    .value.toLowerCase();

  // Apply different themes based on keywords
  if (userInput.includes("love") || userInput.includes("romance")) {
    responseBox.className = "love-theme";
  } else if (userInput.includes("night") || userInput.includes("dark")) {
    responseBox.className = "night-theme";
  } else if (userInput.includes("sad") || userInput.includes("heartbreak")) {
    responseBox.className = "sad-theme";
  } else if (userInput.includes("happy") || userInput.includes("joy")) {
    responseBox.className = "happy-theme";
  } else if (userInput.includes("mystery") || userInput.includes("unknown")) {
    responseBox.className = "mystery-theme";
  } else if (userInput.includes("dream") || userInput.includes("fantasy")) {
    responseBox.className = "dreamy-theme";
  } else {
    responseBox.className = "default-theme";
  }
}

// 🎤 Mic Button - Speech Recognition
document.querySelector("#mic-button").addEventListener("click", function () {
  let recognition = new (window.SpeechRecognition ||
    window.webkitSpeechRecognition)();
  recognition.start();

  recognition.onresult = function (event) {
    document.querySelector("#user-instructions").value =
      event.results[0][0].transcript;
  };
});

// 📝 Copy Button
document.querySelector("#copy-button").addEventListener("click", function () {
  let poemText = document.querySelector("#poem-content").innerText;
  navigator.clipboard.writeText(poemText).then(() => {
    document.querySelector("#copy-status").innerText = "Copied!";
    alert("Poem copied to clipboard! 📋");
  });
});

// 📜 Form Submission
document
  .querySelector("#poem-generator-form")
  .addEventListener("submit", generatePoem);
