//Début première fonction-------------------------------------------------------

//---Variable affectée au bouton valider et qui déclenche une fonction lors d'un clic
let submit = document.getElementById("valider").addEventListener("click", VerifierFormulaireInscription);

//---Fonction qui vérifie que les 2 mdp sont identiques
function VerifierFormulaireInscription()
{
  let mdp1 = document.getElementById("mdp1").value;
  let mdp2 = document.getElementById("mdp2").value;
  if(mdp1 != mdp2)
  {
    alert("Les mots de passes sont différents");
    event.preventDefault();
  }
  else if(VerifierMotDePasse == true)
  {
    console.debug("mdp bon");
  }
  else if(VerifierMotDePasse == false)
  {
      alert("La securité du mot de passe n'est pas respectée");
      event.preventDefault();
  }
}

//Fin première fonction---------------------------------------------------------

//Début deuxième fonction-------------------------------------------------------

//---Varable affectée à la case mot de passe et qui déclenche un fonction lors d'une entrée de valeur
document.getElementById("mdp1").addEventListener("input", VerifierMotDePasse);

//---Fonction qui verifie le mot de passe
function VerifierMotDePasse()
{
  let mdp = document.getElementById("mdp1").value;
  let i = 0;
  let texte = "";
  let carSpe = /^[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]*$/;
  let nbMajuscules = 0;
  let nbMinuscules = 0;
  let nbChiffres = 0;
  let nbCarSpe = 0;

  //---Verifier et compter majuscules, minuscules, chiffres, caractères spéciaux
  while(i < mdp.length)
  {
    texte = mdp.charAt(i);
    if (!isNaN(texte))
    {
      nbChiffres++;
    }
    else if (texte.match(carSpe))
    {
      nbCarSpe++;
    }
    else if (texte == texte.toUpperCase())
    {
      nbMajuscules++;
    }
    else if (texte == texte.toLowerCase())
    {
      nbMinuscules++;
    }
    i++;
  }


  /*console.debug("Maj = " + nbMajuscules);
  console.debug("Min = " + nbMinuscules);
  console.debug("Chiffres = " + nbChiffres);
  console.debug("CarSpe = " + nbCarSpe);
  */


  //---Change span 8 caractères si au moins 8 caractères dans mdp
  if((mdp.length) >= 8 && document.getElementById("mdp_longueur").classList.contains("rouge"))
  {
    document.getElementById("mdp_longueur").classList.remove("rouge");
    document.getElementById("mdp_longueur").classList.add("vert");
  }
  else if ((mdp.length) < 8 && document.getElementById("mdp_longueur").classList.contains("vert"))
  {
    document.getElementById("mdp_longueur").classList.remove("vert");
    document.getElementById("mdp_longueur").classList.add("rouge");
  }

  //---Change span chiffre si au moins un chiffre dans mdp
  else if((nbChiffres) >= 1 && document.getElementById("mdp_chiffre").classList.contains("rouge"))
  {
    document.getElementById("mdp_chiffre").classList.remove("rouge");
    document.getElementById("mdp_chiffre").classList.add("vert");
  }
  else if ((nbChiffres) < 1 && document.getElementById("mdp_chiffre").classList.contains("vert"))
  {
    document.getElementById("mdp_chiffre").classList.remove("vert");
    document.getElementById("mdp_chiffre").classList.add("rouge");
  }

  //---Change span caractère si au moins un caractère dans mdp
  else if((nbCarSpe) >= 1 && document.getElementById("mdp_special").classList.contains("rouge"))
  {
    document.getElementById("mdp_special").classList.remove("rouge");
    document.getElementById("mdp_special").classList.add("vert");
  }
  else if ((nbCarSpe) < 1 && document.getElementById("mdp_special").classList.contains("vert"))
  {
    document.getElementById("mdp_special").classList.remove("vert");
    document.getElementById("mdp_special").classList.add("rouge");
  }

  //---Change span majuscule si au moins une majuscule dans mdp
  else if((nbMajuscules) >= 1 && document.getElementById("mdp_majuscule").classList.contains("rouge"))
  {
    document.getElementById("mdp_majuscule").classList.remove("rouge");
    document.getElementById("mdp_majuscule").classList.add("vert");
  }
  else if ((nbMajuscules) < 1 && document.getElementById("mdp_majuscule").classList.contains("vert"))
  {
    document.getElementById("mdp_majuscule").classList.remove("vert");
    document.getElementById("mdp_majuscule").classList.add("rouge");
  }

  //---Change span minuscule si au moins une minuscule dans mdp
  else if((nbMinuscules) >= 1 && document.getElementById("mdp_minuscule").classList.contains("rouge"))
  {
    document.getElementById("mdp_minuscule").classList.remove("rouge");
    document.getElementById("mdp_minuscule").classList.add("vert");
  }
  else if ((nbMinuscules) < 1 && document.getElementById("mdp_minuscule").classList.contains("vert"))
  {
    document.getElementById("mdp_minuscule").classList.remove("vert");
    document.getElementById("mdp_minuscule").classList.add("rouge");
  }

  //---Renvoi true si mdp bon false sinon
  if ((mdp.length >= 8) && (nbChiffres >=1) && (nbCarSpe >= 1) && (nbMajuscules >= 1) && (nbMinuscules >= 1))
  {
    VerifierMotDePasse = true;
  }
  else
  {
    VerifierMotDePasse = false;
  }
}

//Fin deuxième fonction---------------------------------------------------------
