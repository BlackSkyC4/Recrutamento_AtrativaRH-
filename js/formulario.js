const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nome: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	sobrenome: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	ddd: /^\d{2}$/, // 7 a 14 numeros.
	telefone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	nome: false,
	sobrenome: false,
	email: false,
	ddd: false,
	telefone: false
}

const validarFormulario = (e) => {
	switch(e.target.name){
		case "nome":
			validarCampo(expresiones.nome, e.target, 'nome');	
		break;

		case "sobrenome":
			validarCampo(expresiones.sobrenome, e.target, 'sobrenome');
		break;

		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;

		case "ddd":
			validarCampo(expresiones.ddd, e.target, 'ddd');
		break;

		case "cpf":
			validarCampo(expresiones.cpf, e.target, 'telefone');
		break;

		case "telefone":
			validarCampo(expresiones.telefone, e.target, 'telefone');
		break;

		case "cep":
			validarCampo(expresiones.cep, e.target, 'telefone');
		break;

		case "rua":
			validarCampo(expresiones.rua, e.target, 'telefone');
		break;
		
		case "barrio":
			validarCampo(expresiones.barrio, e.target, 'telefone');
		break;
	}	
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if (campos.nome && campos.sobrenome && campos.email && campos.ddd && campos.telefone && campos.cpf && campos.cep && campos.rua && campos.barrio ){
		formulario.reset();
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});