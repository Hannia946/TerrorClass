<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "terroClss";

// Crear conexi�n
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexi�n
if ($conn->connect_error) {
    die("Conexi�n fallida: " . $conn->connect_error);
}
echo "Conexi�n exitosa";
?>
