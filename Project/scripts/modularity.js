

/* Funksjonen under legger content inn hver HTML fil.
En inn i div'en header som er for navbar og en inn i div'en som er for footer for hver side.  */
function modularitet() {

    document.getElementById("header").innerHTML=`

            <div id="navbar">
                <div id="navbar_bilde">
                    <a href="hovedside.html"> <img src="Bilder/Picture.png" style="width: 75px; height: 75px;"> </a>
                </div>
                <div id="navbar_tekst">
                    <p id="navbar_p"><b><a id="navbar_meny" href="meny.html">Se meny</a></b></p>
                    <p id="navbar_p"><b><a id="navbar_coge" href="catering_events.html">Catering & Events</a></b></p>
                    <p id="navbar_p"><b><a id="navbar_Ofte_stilte_spørsmål" href="Ofte_Stilte_sporsmal.html"> Ofte stilte spørsmål </a></b></p>
                    <p id="navbar_p"><b><a id="navbar_kontakt" href="kontakt_oss.html">Kontakt oss</a></b></p>
                </div>
                <div class = "bildeContainer">
                  <img src = "Bilder/Hamburger.png" onclick = "callDropdown(), changeDropdownImage()" class = "dropdownBilde" id = "dropdownBilde">
                  <img src = "Bilder/x.png" onclick = "callDropdown(), changeDropdownImage2()" class = "dropdownBilde2" id = "dropdownBilde2">
                  <div id = "dropDownCall" class = "dropdownContent">
                    <a class = "dropdowna" href = "meny.html">Meny</a> <br>
                    <a class = "dropdowna" href = "catering_events.html">Catering & Events</a> <br>
                    <a class = "dropdowna" href = "Ofte_Stilte_Sporsmal.html">Ofte stilte spørsmål</a> <br>
                    <a class = "dropdowna" href = "kontakt_oss.html">Kontakt oss</a>
                  </div>
                </div>
            </div>

        `;


    document.getElementById("footer").innerHTML=`
            <div class="center_footer">
                <div class = "text_footer">
                    <span> Grab Your Box © 2021 </span>
                </div>
                <a href="https://www.instagram.com/grabyourbox/"  target="_blank"> <img
                src="Bilder/instagram.png"> </a>
            </div>
  `;
}
