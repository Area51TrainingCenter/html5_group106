<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
	<link rel="stylesheet" href="css/style.css">
</head>
<body>
	<section>
		<div class="container">
			<div class="columna">
				<form id="formulario" onsubmit="return false" action="ac/login.php" method="post">
					<div class="form-group">
						<input class="form-control" type="text" name="usuario" id="usuario" placeholder="Username">
					</div>
					<div class="form-group">
						<input class="form-control" type="password" name="password" id="password" placeholder="Password">
					</div>
					<div class="form-group">
						<input class="btnenviar" type="submit" id="enviar" value="Enviar">
					</div>
					<div class="form-group">
						<p id="rpta"></p>
					</div>
				</form>
			</div>
		</div>
	</section>
	<script src="js/jquery.js"></script>
	<script src="js/funciones2.js"></script>
</body>
</html>