function muitoCurto(campo, nome, tamanho) {

  if (campo.value.length >= tamanho) return false;

  alert("O conteúdo do campo '" + nome

        + "' deve ter pelo menos " + tamanho + " caracteres."

        + " Por favor, preencha-o corretamente.");

  return true;

}


function tamanhoErrado(campo, nome, tamanho) {

  if (campo.value.length === tamanho) return false;

  alert("O conteúdo do campo '" + nome

        + "' deve ter exatamente " + tamanho + " caracteres. "

        + "Por favor, preencha-o corretamente.");

  return true;

}


function naoNumerico(campo, nome) {

  if (!isNaN(campo.value)) return false;

  alert("Digite somente números no campo '" + nome + "', por favor.");

  return true;

}


function diferentes(campo1, nome1, campo2, nome2) {

  if (campo1.value === campo2.value) return false;

  alert("Os campos '" + nome1 + "' e '" + nome2 + "' devem ser iguais.");

  return true;

}


function letras(){

  tecla = event.keyCode;

  if (tecla >= 48 && tecla <= 57){

    return false;

  }else{

    return true;

  }

}


function validarstring($string) {

  return !!preg_match('|^[\pL\s]+$|u', $string);

}









function validarFormulario() {

  var cad = document.getElementById('cad');


  if (muitoCurto(cad.txtnome, 'Nome', 2)) return;

  if (muitoCurto(cad.txtsobrenome, 'Sobrenome', 2)) return;

  if (tamanhoErrado(cad.txtCPF, 'CPF', 11)) return;

  if (tamanhoErrado(cad.txtDDD, 'DDD', 2)) return;

  if (muitoCurto(cad.txtContato, 'Nº do telefone', 8)) return;

  if (muitoCurto(cad.txtEmail1, 'E-mail', 10)) return;

  if (muitoCurto(cad.txtRua, 'Logradouro', 3)) return;

  if (muitoCurto(cad.txtBairro, 'Bairro', 3)) return;

  if (muitoCurto(cad.txtCidade, 'Cidade', 3)) return;

  if (muitoCurto(cad.txtNumero, 'Número do endereço', 1)) return;

  if (tamanhoErrado(cad.txtCep, 'CEP', 8)) return;

  if (muitoCurto(cad.txtLogin, 'Nome de usuário', 7)) return;

  if (muitoCurto(cad.txtsenha, 'Senha', 6)) return;

  if (muitoCurto(cad.txtCsenha, 'Confirmação da senha', 6)) return;

  if (naoNumerico(cad.txtCPF, 'CPF')) return;

  if (naoNumerico(cad.txtDDD, 'DDD')) return;

  if (naoNumerico(cad.txtContato, 'Nº do telefone')) return;

  //if (naoNumerico(cad.txtNumero, 'Número')) return;

  if (naoNumerico(cad.txtCep, 'CEP')) return;


  if (diferentes(cad.txtsenha, 'Senha', cad.txtCsenha, 'Confirmação da Senha')) return;

  if (diferentes(cad.txtEmail1, 'E-mail', cad.txtEmail2, 'Confirmação de E-mail')) return;


  if (cad.txtdata_nasc.value.length !== 10) {

    alert("Formato de 'data de nascimento' inválido."

          + " Por favor, preencha-o corretamente.");

    return;

  }


  if (!validaCPF(cad.txtCPF.value)) {

    alert("Você digitou um CPF inválido, por favor, insira-o corretamente.");

    return;  

  }

  if (!validarstring(cad.txtdata_nasc.value)) {

    alert("não pode");

    return;  

  }












  cad.submit();

}


function validaCPF(cpf)

{

  var numeros, digitos, soma, i, resultado, digitos_iguais;

  digitos_iguais = 1;

  if (cpf.length < 11)

    return false;

  for (i = 0; i < cpf.length - 1; i++)

    if (cpf.charAt(i) != cpf.charAt(i + 1))

    {

      digitos_iguais = 0;

      break;

    }

  if (!digitos_iguais)

  {

    numeros = cpf.substring(0,9);

    digitos = cpf.substring(9);

    soma = 0;

    for (i = 10; i > 1; i--)

      soma += numeros.charAt(10 - i) * i;

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado != digitos.charAt(0))

      return false;

    numeros = cpf.substring(0,10);

    soma = 0;

    for (i = 11; i > 1; i--)

      soma += numeros.charAt(11 - i) * i;

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

    if (resultado != digitos.charAt(1))

      return false;

    return true;

  }

  else

    return false;

}