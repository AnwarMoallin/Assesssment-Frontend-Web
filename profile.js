const btnColor = document.getElementById("color");
const btnPlace = document.getElementById("place");
const btnRitual = document.getElementById("ritual");

btnColor.addEventListener("click", function () {
  alert(btnColor.textContent);
});
btnPlace.addEventListener("click", function () {
  alert(btnPlace.textContent);
});
btnRitual.addEventListener("click", function () {
  alert(btnRitual.textContent);
});
