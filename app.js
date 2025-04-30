function buscarMedicamento() {
  const medId = document.getElementById('medId').value.trim();
  const resultado = document.getElementById('resultado');

  if (!medId) {
    resultado.innerHTML = "<p style='color:red;'>Por favor ingresa un ID válido.</p>";
    return;
  }

  // Aquí hacemos un GET para obtener la receta desde el backend
  fetch(`https://confirmacionback.onrender.com/medication-request/${medId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("No se encontró la receta.");
      }
      return response.json();
    })
    .then(medData => {
      resultado.innerHTML = `
        <h3>Receta médica</h3>
        <p><strong>ID:</strong> ${medData._id}</p>
        <p><strong>Medicamento:</strong> ${medData.medication || 'No disponible'}</p>
        <p><strong>Paciente:</strong> ${medData.subject?.display || 'No especificado'}</p>
        <p><strong>Estado:</strong> ${medData.status || 'Desconocido'}</p>
      `;
    })
    .catch(error => {
      console.error('Error:', error);
      resultado.innerHTML = "<p style='color:red;'>Error al buscar la receta.</p>";
    });
}
