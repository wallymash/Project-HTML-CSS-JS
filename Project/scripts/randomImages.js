
//denne javascript filen handler den effekten på slideshow som står på hovedside.html
//den håndterer hvor lysbildefremvisningen skal vises, hvilke bilder som roteres og hvor lenge bildene vil være synlige
//koden hentes fra nettsiden : https://www.w3schools.com/howto/howto_js_slideshow.asp

// SLIDESHOW
var myIndex = 0;
slideshow();

function slideshow() {
  var i;
  var x = document.getElementsByClassName("slides_img_hovedSide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  myIndex++;
  if (myIndex > x.length) {
      myIndex = 1;
    }    
    
  x[myIndex-1].style.display = "block";  
  setTimeout(slideshow, 5000); 
}




