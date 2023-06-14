// Variables globales
let idCounter = 1; // Contador para generar IDs únicos
let listaRutas = []; // Array para almacenar las rutas
let rutaSeleccionada = null; // Ruta seleccionada para editar

// Función para agregar o editar una ruta
function agregarEditarRuta(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores del formulario
    const nombreRuta = document.getElementById('nombreRuta').value;
    const valorTiquete = document.getElementById('valorTiquete').value;
    const ciudadOrigen = document.getElementById('ciudadOrigen').value;
    const ciudadDestino = document.getElementById('ciudadDestino').value;
    const puntosFidelizacion = document.getElementById('puntosFidelizacion').value;

    // Verificar si se está agregando o editando una ruta
    if (rutaSeleccionada) {
        // Editar la ruta existente
        rutaSeleccionada.nombre = nombreRuta;
        rutaSeleccionada.valorTiquete = parseFloat(valorTiquete);
        rutaSeleccionada.origen = ciudadOrigen;
        rutaSeleccionada.destino = ciudadDestino;
        rutaSeleccionada.puntosFidelizacion = parseInt(puntosFidelizacion);

        // Reiniciar la ruta seleccionada
        rutaSeleccionada = null;
    } else {
        // Crear un objeto ruta con los valores ingresados
        const ruta = {
            id: idCounter++,
            nombre: nombreRuta,
            valorTiquete: parseFloat(valorTiquete),
            origen: ciudadOrigen,
            destino: ciudadDestino,
            puntosFidelizacion: parseInt(puntosFidelizacion)
        };

        // Agregar la ruta al array
        listaRutas.push(ruta);
    }

    // Limpiar el formulario y mostrar la lista de rutas
    limpiarFormulario();
    mostrarListaRutas();
}

// Función para limpiar el formulario después de agregar o editar una ruta
function limpiarFormulario() {
    document.getElementById('nombreRuta').value = '';
    document.getElementById('valorTiquete').value = '';
    document.getElementById('ciudadOrigen').value = '';
    document.getElementById('ciudadDestino').value = '';
    document.getElementById('puntosFidelizacion').value = '';
    document.getElementById('editarRutaBtn').style.display = 'none';
    document.getElementById('agregarRutaBtn').style.display = 'inline';
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
                <button onclick="editarRuta(${ruta.id})">Editar</button>
                <button onclick="eliminarRuta(${ruta.id})">Eliminar</button>
            </td>
        </tr>
    `;
}

// Función para editar una ruta
function editarRuta(id) {
    // Buscar la ruta con el ID proporcionado
    const ruta = listaRutas.find(ruta => ruta.id === id);

    // Verificar si se encontró la ruta
    if (ruta) {
        // Llenar el formulario con los datos de la ruta
        document.getElementById('nombreRuta').value = ruta.nombre;
        document.getElementById('valorTiquete').value = ruta.valorTiquete;
        document.getElementById('ciudadOrigen').value = ruta.origen;
        document.getElementById('ciudadDestino').value = ruta.destino;
        document.getElementById('puntosFidelizacion').value = ruta.puntosFidelizacion;

        // Mostrar el botón de editar y ocultar el botón de agregar
        document.getElementById('editarRutaBtn').style.display = 'inline';
        document.getElementById('agregarRutaBtn').style.display = 'none';

        // Actualizar la ruta seleccionada
        rutaSeleccionada = ruta;
    }
}

// Función para eliminar una ruta
function eliminarRuta(id) {
    // Filtrar la ruta con el ID proporcionado y actualizar el array de rutas
    listaRutas = listaRutas.filter(ruta => ruta.id !== id);
    mostrarListaRutas();
}

// Escuchar el evento submit del formulario y llamar a la función agregarEditarRuta
document.getElementById('agregarRutaForm').addEventListener('submit', agregarEditarRuta);

// Mostrar la lista de rutas inicialmente
mostrarListaRutas();
