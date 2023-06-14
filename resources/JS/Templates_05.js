/* SISTEMA DE FIDELIZACION - SECCION 5 */

{/* <section id="seccion5">
<h3>Puntos de Fidelización</h3>
<table id="fidelizacion-table">
  <thead>
    <tr>
      <th>Cliente</th>
      <th>Puntos de Fidelización</th>
    </tr>
  </thead>
  <tbody id="fidelizacion-body">
    <!-- Aquí se agregarán las filas dinámicamente -->
  </tbody>
</table>
</section> */}

// Función para mostrar la lista de puntos de fidelización
function mostrarPuntosFidelizacion() {
    const fidelizacionTableBody = document.getElementById('fidelizacion-body');
    fidelizacionTableBody.innerHTML = '';

    clientes.forEach(cliente => {
        const clienteCell = document.createElement('td');
        const puntosCell = document.createElement('td');

        clienteCell.textContent = `${cliente.nombres} ${cliente.apellidos}`;
        puntosCell.textContent = cliente.puntosFidelizacion;

        const row = document.createElement('tr');
        row.appendChild(clienteCell);
        row.appendChild(puntosCell);

        fidelizacionTableBody.appendChild(row);
    });
}



// Escuchar el evento submit del formulario de agregar cliente
document.getElementById('registroClienteForm').addEventListener('submit', agregarCliente);

// Escuchar el evento submit del formulario de agregar ruta
document.getElementById('agregarRutaForm').addEventListener('submit', agregarRuta);

// Escuchar el evento submit del formulario de compra de tiquetes
document.getElementById('compra-form').addEventListener('submit', comprarTiquete);

// Inicializar la lista de clientes y rutas
actualizarListaClientes();
mostrarListaRutas();
mostrarPuntosFidelizacion();