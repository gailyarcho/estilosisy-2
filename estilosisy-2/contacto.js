function validarFormulario() {
  // Obtener valores de los campos
  var nombre = document.getElementById('nombre').value;
  var apellido = document.getElementById('apellido').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;
  
  // Validar campos
  var error = false;
  
  if (nombre === '') {
    document.getElementById('error-nombre').innerHTML = 'Por favor, ingresa tu nombre.';
    error = true;
  } else {
    document.getElementById('error-nombre').innerHTML = '';
  }
  
  if (apellido === '') {
    document.getElementById('error-apellido').innerHTML = 'Por favor, ingresa tu apellido.';
    error = true;
  } else {
    document.getElementById('error-apellido').innerHTML = '';
  }

  if (email === '') {
    document.getElementById('error-email').innerHTML = 'Por favor, ingresa tu correo electrónico.';
    error = true;
  } else if (!validarEmail(email)) {
    document.getElementById('error-email').innerHTML = 'Por favor, ingresa un correo electrónico válido.';
    error = true;
  } else {
    document.getElementById('error-email').innerHTML = '';
  }
  
  if (mensaje === '') {
    document.getElementById('error-mensaje').innerHTML = 'Por favor, ingresa un mensaje.';
    error = true;
  } else {
    document.getElementById('error-mensaje').innerHTML = '';
  }
  
  if (!error) {
    // Enviar el formulario si no hay errores
    // Aquí puedes agregar tu código para enviar el formulario a través de AJAX o cualquier otra forma
    alert('Formulario enviado correctamente.');
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';
  }
  
  return false;
}

function validarEmail(email) {
  // Expresión regular para validar el formato de correo electrónico
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}