alert("Hello👻");

function generatePoem(event) {
  event.preventDefault();
  let poemElement = document.querySelector("#content");

  new Typewriter("#content", {
    strings: "The poem💕👣💕",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
