function buscarMedicamento() {
  const medId = document.getElementById('medId').value.trim();
  const resultado = document.getElementById('resultado');

  if (!medId) {
    resultado.innerHTML = "<p style='color:red;'>Por favor ingresa un ID válido.</p>";
    return;
  }

  // Crear el objeto que se enviará al backend
  const medicationRequest = {
    id: medId
  };

  fetch('https://confirmacionback.onrender.com/medication-request', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(medicationRequest)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Receta creada exitosamente');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al crear la receta');
    });
}
