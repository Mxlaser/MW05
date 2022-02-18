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
      <label for="pseudo">Pseudo :</label>
      <input type="text" id="pseudo" name="pseudo_Utilisateur" required>
      <label for="passe">Mot de passe :</label>
      <input type="password" id="passe" name="mot_De_Passe_Utilisateur" required>
      <input type="submit" id="valider" name="valider" value="Valider">
    </form>

    <footer>
      <a href="formulaire_inscription.php">Formulaire d'inscription</a>
      <a href="index.php">Page principale</a>
      <button type="button" id="dark_light">Mode sombre</button>
    </footer>

  </body>
  <script src="JS\dark_light.js"></script>
</html>

<?php
	if(isset($_GET['erreur']))
	{
		echo "<script language=\"javascript\">";
		echo "alert('Une erreur de connexion est survenue !')";
		echo "</script>";
	}
  if(isset($_COOKIE['pseudo']))
  {
    header('Location:index.php');
  }
?>
