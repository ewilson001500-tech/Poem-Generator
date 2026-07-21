function displayPoem(response) {
  console.log("peom generatated");

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

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}

let form = document.querySelector("#poem-generator-form");
form.addEventListener("submit", generatorPoem);
