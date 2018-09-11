<?php
$usuario = $_POST["usuario"];
$password = $_POST["password"];

$objeto = array();
$objeto["nombre"] = "alonso";
$objeto["apellido"] = "perez";
$objeto["fecha"] = "1985-05-27";
$objeto["dni"] = 12345678;

if($usuario != "")
{
	if($password != "")
	{
		$objeto["rpta"] = true;
		$objeto["mensaje"] = "Mi usuario es: ".$usuario." y password es $password";
		echo json_encode($objeto);
	}else{
		echo json_encode(array("rpta" => false,"mensaje" => "No hay pass"));	
	}
}else{
	echo json_encode(array("rpta" => false,"mensaje" => "No hay usuario"));
}
?>