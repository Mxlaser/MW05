<?php
  /*$mydb=new PDO('mysql:host=localhost;dbname=MW04_drone_nikola;charset=utf8','nikola','snirlla');
  $req="Select nom, prenom from utilisateur";
  $reqpreparer=$mydb->prepare($req);
  $tableauDeDonnees=array();
  $reqpreparer->execute($tableauDeDonnees);
  $reponse=$reqpreparer->fetchAll(PDO::FETCH_ASSOC);
  print_r($reponse);
  $reqpreparer->closeCursor();*/

  //---Connection---
  if(!empty($_POST))
  {
    if(isset($_POST['valider'])){
    $pseudo=$_POST['pseudo_Utilisateur'];
    $mdp=$_POST['mot_De_Passe_Utilisateur'];

    $mydb=new PDO('mysql:host=localhost;dbname=MW04_drone_nikola;charset=utf8','nikola','snirlla');

    $req="select nom,prenom from utilisateur where pseudo=? and mdp=?";
    $reqpreparer=$mydb->prepare($req);
    $tableauDeDonnees=array($pseudo, $mdp);
    $reqpreparer->execute($tableauDeDonnees);

    $reponse=$reqpreparer->fetchAll(PDO::FETCH_ASSOC);
    $reponse2=count($reponse);

    if($reponse2<1)
      echo "Cet utilisateur n'existe pas !";
    else
      print_r($reponse);
    //echo "Le pseudo vaut ".$pseudo;
    //echo " Le mdp vaut ".$mdp;
    $reqpreparer->closeCursor();
    }
  }

  //---Inscription---
  if(!empty($_POST))
  {
    if(isset($_POST['inscription']))
    {
      foreach ($_POST as $cle => $valeur)
      {
        $$cle = $valeur;
      }
    }
    $mydb=new PDO('mysql:localhost=localhost;dbname=MW04_drone_nikola;charset=utf8','nikola','snirlla');

    $req="select nom from utilisateur where pseudo=?";
    $reqpreparer=$mydb->prepare($req);
    $tableauDeDonnees=array($pseudo_Utilisateur);
    $reqpreparer->execute($tableauDeDonnees);

    $reponse=$reqpreparer->fetchAll(PDO::FETCH_ASSOC);
    $reponse2=count($reponse);

    if($reponse2<1)
    {
      $req="insert into utilisateur (nom, prenom, email, naissance, pseudo, mdp) values(?,?,?,?,?,?)";
      $reqpreparer=$mydb->prepare($req);
      $tableauDeDonnees=array($nom, $prenom, $email, $date, $pseudo_Utilisateur, $mot_De_Passe_Utilisateur);
      $reqpreparer->execute($tableauDeDonnees);
    }
    else
      echo "Ce pseudo est déjà pris !";

    $reqpreparer->closeCursor();
  }
?>
