//Debut première fonction-------------------------------------------------------

//---Fontion s'exécute tte les 1s
setInterval(MettreAJourLeCompteur, 1000);
//--Variables affectée aux div jours, heures, minutes et secondes
let divJours = document.getElementById("compteurJours");
let divHeures = document.getElementById("compteurHeures");
let divMinutes = document.getElementById("compteurMinutes");
let divSecondes = document.getElementById("compteurSecondes");

//---Fonction qui met à jour le compteur
function MettreAJourLeCompteur()
{
  let dateActuelle = new Date(Date.now());
  let dateStage = new Date(Date.UTC(2022, 04, 23));
  //---Variable qui calcule l'ecart entre la date du stage et la date actuelle
  let diffTemps = dateStage.getTime() - dateActuelle.getTime();
  //---Varibles qui convertissent la date en jours, heures, minutes et secondes
  let diffJours = diffTemps / (1000 * 3600 * 24);
  let diffHeures = (diffTemps / (1000 * 3600)) % 24 ;
  let diffMinutes = (diffTemps / ( 1000 * 60)) % 60;
  let diffSecondes = (diffTemps / 1000) % 60;

  //---"0" + 2 chiffres pour les jours
  if(diffJours < 100)
  {
    divJours.innerText = "0" + Math.floor(diffJours) + "J";
  }
  //---3 chiffres pour les jours
  else
  {
      divJours.innerText = Math.floor(diffJours) + "J";
  }

  //---"0" + 1 chiffre pour les heures
  if(diffHeures < 10)
  {
    divHeures.innerText = "0" + Math.floor(diffHeures) + "H";
  }
  //---2 chiffres pour les heures
  else
  {
    divHeures.innerText = Math.floor(diffHeures) + "H";
  }

  //---"0" + 1 chiffre pour les minutes
  if(diffMinutes < 10)
  {
    divMinutes.innerText = "0" + Math.floor(diffMinutes) + "M";
  }
  //---2 chiffres pour les minutes
  else
  {
    divMinutes.innerText = Math.floor(diffMinutes) + "M";
  }

  //---"0" + 1 chiffre pour les secondes
  if(diffSecondes < 10)
  {
    divSecondes.innerText = "0" + Math.floor(diffSecondes) + "S";
  }
  //---2 chiffres pour les secondes
  else
  {
    divSecondes.innerText = Math.floor(diffSecondes) + "S";
  }
}

//Fin première fonction---------------------------------------------------------
