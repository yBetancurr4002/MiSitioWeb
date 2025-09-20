// Script simple para validación del formulario de contacto
function validarFormulario() {
  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const mensaje = document.getElementById("mensaje").value;

  if (nombre === "" || correo === "" || mensaje === "") {
    alert("Por favor completa todos los campos.");
    return false;
  }
  alert("Formulario enviado con éxito.");
  return true;
}
