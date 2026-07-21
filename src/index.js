function generatorPoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The restless ink of the Atlantic crests and breaks,",
    autoStart: true,
    cursor: "",
    delay: 2,
  });
}

let form = document.querySelector("#poem-generator-form");
form.addEventListener("submit", generatorPoem);
