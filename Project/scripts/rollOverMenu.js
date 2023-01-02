// The function callDropdown enables the class "show" to the dropdown content. It's called on when you press the dropdown button on the navbar.
// The first part of the window.onclick event handles the removal of the dropdown content if the content is shown and you click anywhere else on the screen.
// The second part of the window.onclick event handles the changing of images from three straight lines to the white x if you click anywhere else on the screen
// at the same time as the dropdown content disappears.

function callDropdown() {
    document.getElementById("dropDownCall").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdownBilde')) {
      var dropdowns = document.getElementById("dropDownCall");
      if (dropdowns.classList.contains("show")) {
        dropdowns.classList.remove("show");
      }
        var bilde = document.getElementById("dropdownBilde");
        var bilde2 = document.getElementById("dropdownBilde2");

        if (bilde2.classList.contains = "show") {
          bilde2.classList.remove("show");
          bilde2.classList.add("hide");
          bilde.classList.remove("hide");
        }
    }
}
