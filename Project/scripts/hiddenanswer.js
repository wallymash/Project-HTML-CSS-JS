
/* Denne javascripten er koblet sammen med CSS style(se Ofte_stilte_spørsmål.css)
hvor display blir endret gjennom at class question blir aktivert når det enkelte "spørsmålet" blir trykket på */

let knapp_spørsmål_ofte_stilte_spørsmål=document.getElementsByClassName("question");

for(i=0; i<knapp_spørsmål_ofte_stilte_spørsmål.length; i++)
{
    knapp_spørsmål_ofte_stilte_spørsmål[ i ].addEventListener("click",function() {
        this.classList.toggle("aktiv");
    });
}