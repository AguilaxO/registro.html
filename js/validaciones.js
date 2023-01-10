
export function valida(input) {
	const tipoInput = input.dataset.tipo;
	if (validadores[tipoInput]) {
		validadores[tipoInput](input);
	}

	if (input.validity.valid) {
		input.parentElement.classList.remove("input-container--invalid");
		input.parentElement.querySelector(".input-message-error").innerHTML = "";
	} else {
		input.parentElement.classList.add("input-container--invalid");
		input.parentElement.querySelector(".input-message-error").innerHTML = elegirMensajeError(input, tipoInput);
	}
}

const mensajesDeError = {
	nombre: {
		valueMissing: "El campo nombre no puede estar vacio"
	},
	email: {
		valueMissing: "El campo email no puede estar vacio",
		typeMismatch: "El correo ingresado no es valido",	
	},
	password: {
		valueMissing: "El campo contraseña no puede estar vacio",
		patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
	}, 
	nacimiento: {
		valueMissing: "Este campo no puede estar vacio",
		customError: "Debes tener mas de 18 años de edad",
	}, 
	numero: {
		valueMissing: "El campo Número telefónico no puede estar vacio",
		patternMismatch: "El formato requerido es de 10 números",
	},
	direccion: {
		valueMissing: "El campo Dirección no puede estar vacio",
		patternMismatch: "La dirección debe contener entre 10 y 40 caracteres",
	}, 
	ciudad: {
		valueMissing: "El campo ciudad no puede estar vacio",
		patternMismatch: "La ciudad debe contener entre 10 y 40 caracteres",
	},
	estado: {
		valueMissing: "El campo estado no puede estar vacio",
		patternMismatch: "El estado debe contener entre 10 y 40 caracteres",
	},

}

// data atributos validos
const validadores = {
	nacimiento: (input) => validarEdad(input),
}

// Errores que se están manejando
const errores = [
	"valueMissing",
	"typeMismatch",
	"patternMismatch",
	"customError",
]

function elegirMensajeError (input, tipoInput) {
	let mensaje = "";
	errores.forEach((error) => {
		if (input.validity[error]) {
			mensaje = mensajesDeError[tipoInput][error];
		}
	})
	return mensaje;
}

function validarEdad(evento) {
	const fechaIngresada = new Date(evento.value);
	let mensaje = "";
	if (!mayorEdad(fechaIngresada)) {
		mensaje = "Debes tener más de 18 años de edad";
	}
	evento.setCustomValidity(mensaje);
  } 

function mayorEdad (fecha) {
	const fechaActual = new Date();
	const fechaMinima = new Date(
		fecha.getUTCFullYear() + 18,
		fecha.getUTCMonth(),
		fecha.getUTCDate(),
	)
	return (fechaMinima <= fechaActual);
}
