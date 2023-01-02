//funksjoner som gjelder for dropdown/hamburgermenyen, hvis det klikkes på kommer et annet bilde/tegn opp som indikerer på at den er åpen.


function changeDropdownImage() {
  var bilde = document.getElementById("dropdownBilde");
  var bilde2 = document.getElementById("dropdownBilde2");
  if (bilde.style.display = "inline-block") {
    bilde.classList.add("hide");
    bilde2.classList.add("show");
    bilde2.classList.remove("hide");
  }
}

function changeDropdownImage2 () {
  var bilde = document.getElementById("dropdownBilde");
  var bilde2 = document.getElementById("dropdownBilde2");
  if (bilde2.style.display = "inline-block") {
    bilde2.classList.add("hide");
    bilde.classList.remove("hide");
    bilde.classList.add("show");
  }
}
