function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 2,
  });
}

function generatorPoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#prompt");
  let apiKey = "f37daf9e84tf92dob02174b7ea4039ad";
  let prompt = `User instructions: Generate a family-friendly poem about ${promptInput.value}`;
  let context =
    "You love to write short poems. Your mission is to generator 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. DO NOT include a title to the poem. Do Not display the HTML. Sign  the poe with 'AI Generated' inside a <strong> element at the end of the poem and NOT at the beginning.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");

  poemElement.innerHTML = `<div class="loading">🧠</div> Generating a poem about ${promptInput.value}`;

  axios.get(apiURL).then(displayPoem);
}

let form = document.querySelector("#poem-generator-form");
form.addEventListener("submit", generatorPoem);
