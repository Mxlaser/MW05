<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mon CV de geek</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="CSS\formulaire.css">
  </head>

  <body id ="body" data-theme="light">
    <h1>Identifiez-vous !</h1>
    <form action="rest.php" method="post">
      <label for="nom">Nom :</label>
      <input type="text" id="nom" name="nom" required>
      <label for="prenom">Prénom :</label>
      <input type="text" id="prenom" name="prenom" required>
      <label for="email">Adresse mail :</label>
      <input type="email" id="email" name="email" required>
      <label for="date">Date de naissance :</label>
      <input type="date" id="date" name="date" required>
      <label for="pseudo">Pseudo :</label>
      <input type="text" id="pseudo" name="pseudo_Utilisateur" required>
      <label for="mdp1">Mot de passe :</label>
      <input type="password" id="mdp1" name="mot_De_Passe_Utilisateur" required>

      <p><span id="mdp_longueur" class="rouge">8 caractères</span> avec au moins :
        <span id="mdp_majuscule" class="rouge">1 Majuscule</span>,
        <span id="mdp_minuscule" class="rouge">1 Minuscule</span>,
        <span id="mdp_chiffre" class="rouge">1 Chiffre</span>,
        <span id="mdp_special" class="rouge">1 Caractère spécial</span>.
      </p>

      <label for="mdp2">Ressaisir le mot de passe :</label>
      <input type="password" id="mdp2" name="mot_De_Passe_Utilisateur2" required>
      <input type="submit" id="valider" name="inscription" value="Valider">
    </form>

    <footer>
      <a href="index.php">Page principale</a>
      <button type="button" id="dark_light">Mode sombre</button>
    </footer>

  </body>
  <script src="JS\formulaire.js"></script>
  <script src="JS\dark_light.js"></script>
</html>

<?php
	if(isset($_GET['erreur']))
	{
		echo "<script language=\"javascript\">";
		echo "alert('Le pseudo est déja utilisé !')";
		echo "</script>";
	}
  if(isset($_COOKIE['pseudo']))
  {
    header('Location:index.php');
  }
?>
