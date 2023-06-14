/* CODIGO PARA LA SECCION 2: GESTION DE RUTAS AEREAS*/

/* <!-- Seccion 3: Modulo de Rutas -->
<section id="seccion3">
    <h1>Modulo de Rutas</h1>
    <p>Contenido adicional aquí...</p>
    <div class="ruta-form">
        <h2>Agregar Ruta</h2>
        <form id="agregarRutaForm">
            <div>
                <label for="nombreRuta">Nombre de la Ruta:</label>
                <input type="text" id="nombreRuta" placeholder="Ingrese el nombre de la ruta" required>
            </div>
            <div>
                <label for="valorTiquete">Valor del Tiquete:</label>
                <input type="number" id="valorTiquete" placeholder="Ingrese el valor del tiquete" required>
            </div>
            <div>
                <label for="ciudadOrigen">Ciudad de Origen:</label>
                <input type="text" id="ciudadOrigen" placeholder="Ingrese la ciudad de origen" required>
            </div>
            <div>
                <label for="ciudadDestino">Ciudad de Destino:</label>
                <input type="text" id="ciudadDestino" placeholder="Ingrese la ciudad de destino" required>
            </div>
            <div>
                <label for="puntosFidelizacion">Puntos para Fidelización:</label>
                <input type="number" id="puntosFidelizacion" placeholder="Ingrese los puntos para fidelización"
                    required>
            </div>
            <button class="agregar" type="submit">Agregar</button>
        </form>
    </div>
    <div class="ruta-lista">
        <h2>Listado de Rutas</h2>
        <table id="listaRutas">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre de la Ruta</th>
                    <th>Valor del Tiquete</th>
                    <th>Ciudad de Origen</th>
                    <th>Ciudad de Destino</th>
                    <th>Puntos para Fidelización</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <!-- Los elementos de la lista se agregarán dinámicamente aquí -->
            </tbody>
        </table>
    </div>
</section> */

// Variables globales
let idCounter = 1; // Contador para generar IDs únicos
let listaRutas = []; // Array para almacenar las rutas

// Función para agregar una ruta
function agregarRuta(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores del formulario
    const nombreRuta = document.getElementById('nombreRuta').value;
    const valorTiquete = document.getElementById('valorTiquete').value;
    const ciudadOrigen = document.getElementById('ciudadOrigen').value;
    const ciudadDestino = document.getElementById('ciudadDestino').value;
    const puntosFidelizacion = document.getElementById('puntosFidelizacion').value;

    // Crear un objeto ruta con los valores ingresados
    const ruta = {
        id: idCounter++,
        nombre: nombreRuta,
        valorTiquete: parseFloat(valorTiquete),
        origen: ciudadOrigen,
        destino: ciudadDestino,
        puntosFidelizacion: parseInt(puntosFidelizacion)
    };

    // Agregar la ruta al array y limpiar el formulario
    listaRutas.push(ruta);
    limpiarFormulario();
    mostrarListaRutas();
    cargarOpcionesRutas();
}

// Función para limpiar el formulario después de agregar una ruta
function limpiarFormulario() {
    document.getElementById('nombreRuta').value = '';
    document.getElementById('valorTiquete').value = '';
    document.getElementById('ciudadOrigen').value = '';
    document.getElementById('ciudadDestino').value = '';
    document.getElementById('puntosFidelizacion').value = '';
}

// Función para mostrar la lista de rutas en la tabla
function mostrarListaRutas() {
    const tablaRutas = document.getElementById('listaRutas');
    // Limpiar la tabla
    tablaRutas.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre de la Ruta</th>
                <th>Valor del Tiquete</th>
                <th>Ciudad de Origen</th>
                <th>Ciudad de Destino</th>
                <th>Puntos para Fidelización</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            ${listaRutas.map(generarFilaRuta).join('')}
        </tbody>
    `;
}

// Función auxiliar para generar la fila de una ruta
function generarFilaRuta(ruta) {
    return `
        <tr>
            <td>${ruta.id}</td>
            <td>${ruta.nombre}</td>
            <td>${ruta.valorTiquete}</td>
            <td>${ruta.origen}</td>
            <td>${ruta.destino}</td>
            <td>${ruta.puntosFidelizacion}</td>
            <td>
                <button onclick="eliminarRuta(${ruta.id})">Eliminar</button>
            </td>
        </tr>
    `;
}

// Función para eliminar una ruta
function eliminarRuta(id) {
    // Filtrar la ruta con el ID proporcionado y actualizar el array de rutas
    listaRutas = listaRutas.filter(ruta => ruta.id !== id);
    mostrarListaRutas();
}

// Escuchar el evento submit del formulario y llamar a la función agregarRuta
document.getElementById('agregarRutaForm').addEventListener('submit', agregarRuta);

// Mostrar la lista de rutas inicialmente
mostrarListaRutas();