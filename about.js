console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form is submitted");
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

const img = document.querySelector("img");
img.addEventListener("mouseover", function () {
  alert("Pretty eyes you got there");
});
