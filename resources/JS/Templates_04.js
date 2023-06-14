/* CODIGO JS PARA LA SECCION 3: COMPRA DE TIQUETES */

/* <!-- Seccion 4: Compra de Tiquetes -->
    <section id="seccion4">
        <div class="container">
            <h2>Compra de Tiquetes</h2>

            <form id="compra-form">
                <div class="form-group">
                    <label for="cliente">Cliente:</label>
                    <select class="form-control" id="cliente" required></select>
                </div>

                <div class="form-group">
                    <label for="ruta">Ruta Aérea:</label>
                    <select class="form-control" id="ruta" required></select>
                </div>

                <button type="submit" class="btn btn-primary">Comprar Tiquete</button>
            </form>
        </div>
        <div class="container">
            <h3>Resumen de la Compra</h3>
            <div id="compra-resumen" class="resumen"></div>
        </div>
    </section> */

// Función para cargar las opciones de clientes en el formulario de compra de tiquetes
function cargarOpcionesClientes() {
    const clienteSelect = document.getElementById('cliente');
    clienteSelect.innerHTML = clientes.map(cliente => `<option value="${cliente.id}">${cliente.nombres} ${cliente.apellidos}</option>`).join('');
}


// Función para cargar las opciones de rutas en el formulario de compra de tiquetes
function cargarOpcionesRutas() {
    const rutaSelect = document.getElementById("ruta");
    rutaSelect.innerHTML = "";

    listaRutas.map((ruta) => {
        const option = document.createElement("option");
        option.value = ruta.id;
        option.textContent = `${ruta.nombre} - ${ruta.origen} a ${ruta.destino}`;
        rutaSelect.appendChild(option);
    });
}

function comprarTiquete(event) {
    event.preventDefault();

    const clienteId = parseInt(document.getElementById("cliente").value);
    const rutaId = parseInt(document.getElementById("ruta").value);

    const cliente = clientes.find(cliente => cliente.id === clienteId);
    const ruta = listaRutas.find(ruta => ruta.id === rutaId);

    let valorSinImpuestos = ruta.valorTiquete;
    if (typeof valorSinImpuestos !== 'number' || isNaN(valorSinImpuestos)) {
        alert('El valorSinImpuestos no es un número válido.');
        console.error('El valorSinImpuestos no es un número válido.');
        return;
    }

    const impuestoIVA = valorSinImpuestos * 0.16;
    const tasaAeroportuaria = valorSinImpuestos * 0.04;
    const valorTotal = valorSinImpuestos + impuestoIVA + tasaAeroportuaria;

    const compraResumen = document.getElementById('compra-resumen');
    compraResumen.innerHTML = '';

    const resumen = document.createElement('p');
    resumen.textContent = `Resumen de la Compra:
          Cliente: ${cliente.nombres} ${cliente.apellidos}
          Ruta: ${ruta.nombre} - ${ruta.origen} a ${ruta.destino}
          Valor Tiquete: $${valorSinImpuestos.toFixed(2)}
          Impuesto IVA (16%): $${impuestoIVA.toFixed(2)}
          Tasa Aeroportuaria (4%): $${tasaAeroportuaria.toFixed(2)}
          Total a Pagar: $${valorTotal.toFixed(2)}`;
    compraResumen.appendChild(resumen);

    // Abonar puntos de fidelización al cliente
    cliente.puntosFidelizacion += ruta.puntosFidelizacion;

    // Actualizar la lista de puntos de fidelización
    mostrarPuntosFidelizacion();

    // Limpiar el formulario
    document.getElementById('compra-form').reset();
}

// Escuchar el evento submit del formulario de compra de tiquetes y llamar a la función comprarTiquete
document.getElementById('compra-form').addEventListener('submit', comprarTiquete);