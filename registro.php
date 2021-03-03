<?php
  $data["nombre"]=$_GET['nombre'];
  $data["contacto"]=$_GET['contacto'];
  $data["correo"]=$_GET['correo'];
  $data["descripcion"]=$_GET['descripcion'];
  file_put_contents("registros.txt", $data);
  header('Location:registrate.html');

?>
