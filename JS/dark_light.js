//Début première fonction-------------------------------------------------------

//---Variable affectée au bouton qui déclenche une fonction lors d'un clic
let darklight = document.getElementById("dark_light");
darklight.addEventListener("click", AppuiButton);
//---Variable affectée au body
let monBody = document.getElementById("body");

//---Fonction qui change le mode de la page (clair ou sombre)
function AppuiButton()
{
  if(monBody.getAttribute("data-theme") == "light")
  {
    monBody.setAttribute("data-theme", "dark");
    darklight.innerText = "Mode clair";
  }

  else
  {
    monBody.setAttribute("data-theme", "light");
    darklight.innerText = "Mode sombre";
  }
}

//Fin première fonction---------------------------------------------------------

//Début gestion du monde sombre en fonction de l'heure--------------------------

//---Variable qui prend la date actuelle
let date = new Date();
//---Variable qui prend seulement l'heure de la variable date
let heure = date.getHours();

if((heure > 7) && (heure < 19))
{
  monBody.setAttribute("data-theme", "light");
  darklight.innerText = "Mode sombre";
}
else
{
  monBody.setAttribute("data-theme", "dark");
  darklight.innerText = "Mode clair";
}

//Fin gestion du mode sombre en fonction de l'heure-----------------------------
