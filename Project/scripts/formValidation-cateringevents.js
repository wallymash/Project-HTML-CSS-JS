//Kommer opp alert om at du har glemt å trykke på en rett etter å ha trykket på send knappen, siden vil i dette tilfellet ikke refreshes
//Hvis en matrett er valgt så vil det komme opp en alert "Takk for hendvendelsen...." og siden vil deretter refreshes.


function SendMelding() {
  if(document.querySelector(".checkbox:checked"))
  {
    alert("Takk for hendvendelsen, vi skal svare så kjapt som mulig!");
  } else
  {
    alert("Du må velge minst en rett!");
    return false;
  }
}


