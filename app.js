function buscarMedicamento() {
  const medId = document.getElementById('medId').value.trim();
  const resultado = document.getElementById('resultado');

  if (!medId) {
    resultado.innerHTML = "<p style='color:red;'>Por favor ingresa un ID válido.</p>";
    return;
  }

  fetch('https://solicitudback.onrender.com')
    .then(res => {
      if (!res.ok) throw new Error("No encontrado");
      return res.json();
    })
    .then(data => {
      resultado.innerHTML = `
        <h3>Información del Medicamento</h3>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `;
    })
    .catch(err => {
      resultado.innerHTML = `<p style="color:red;">${err.message}</p>`;
    });
}

