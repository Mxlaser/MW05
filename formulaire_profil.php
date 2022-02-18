<!DOCTYPE html>
<?php
  if(isset($_GET['erreur']))
  {
    echo "<script language=\"javascript\">";
    echo "alert('Une erreur de connexion est survenue !')";
    echo "</script>";
  }
  if(!isset($_GET['nom']))
  {
    header('Location:rest.php?profil');
  }
?>

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
    <h1>Votre Profil</h1>
    <form action="rest.php" method="post">
      <label for="nom">Nom :</label>
      <input type="text" id="nom" name="nom" value="<?php echo $_GET['nom']?>" required>
      <label for="prenom">Prénom :</label>
      <input type="text" id="prenom" name="prenom" value="<?php echo $_GET['prenom']?>" required>
      <label for="email">Adresse mail :</label>
      <input type="email" id="email" name="email" value="<?php echo $_GET['email']?>" required>
      <label for="pseudo">Pseudo :</label>
      <input type="text" id="pseudo" name="pseudo_Utilisateur" value="<?php echo $_GET['pseudo']?>" required>
      <input type="submit" id="valider" name="miseAJour" value="Mettre à jour">
    </form>

    <footer>
      <a href="index.php">Page principale</a>
      <button type="button" id="dark_light">Mode sombre</button>
    </footer>

  </body>
  <script src="JS\dark_light.js"></script>
</html>
