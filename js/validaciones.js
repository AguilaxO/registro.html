const validarEdad = (evento) => {
	const input = evento.target;
	const fechaIngresada = new Date(input.value);
	let mensaje = "";
	if (!mayorEdad(fechaIngresada)) {
		mensaje = "Debes tener más de 18 años de edad";
	}
	input.setCustomValidity(mensaje);
  } 

const imputNacimiento = document.querySelector("#birth");
imputNacimiento.addEventListener("blur", validarEdad);

function mayorEdad (fecha) {
	const fechaActual = new Date();
	const fechaMinima = new Date(
		fecha.getUTCFullYear() + 18,
		fecha.getUTCMonth(),
		fecha.getUTCDate(),
	)
	return (fechaMinima <= fechaActual);
}
