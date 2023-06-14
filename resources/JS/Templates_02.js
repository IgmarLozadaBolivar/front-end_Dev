/* CODIGO JS PARA LA SECCION 2: GESTION DE CLIENTES */

/* <!-- Seccion 2: Gestion de clientes -->
    <section id="seccion2">
        <!-- Formulario de registro -->
        <div class="contenedor">
            <h1>Gestión de Clientes</h1>
            <form id="registroClienteForm">
                <div class="form-group">
                    <label for="numeroIdentificacion">Número de identificación</label>
                    <input type="text" id="numeroIdentificacion" placeholder="Número de identificación" required>
                </div>
                <div class="form-group">
                    <label for="nombres">Nombres:</label>
                    <input type="text" id="nombres" placeholder="Nombres" required>
                </div>
                <div class="form-group">
                    <label for="apellidos">Apellidos:</label>
                    <input type="text" id="apellidos" placeholder="Apellidos" required>
                </div>
                <div class="form-group">
                    <label for="telefono">Teléfono:</label>
                    <input type="tel" id="telefono" placeholder="Teléfono" required>
                </div>
                <div class="form-group">
                    <label for="correoElectronico">Correo electrónico:</label>
                    <input type="email" id="correoElectronico" placeholder="Correo electrónico" required>
                </div>
                <div class="form-group">
                    <label for="fechaNacimiento">Fecha de nacimiento:</label>
                    <input type="date" id="fechaNacimiento" placeholder="Fecha de nacimiento" required>
                </div>
                <div class="form-group">
                    <label for="nacionalidad">Nacionalidad:</label>
                    <input type="text" id="nacionalidad" placeholder="Nacionalidad" required>
                </div>
                <button class="registrar" type="submit">Registrar</button>
            </form>
        </div>
        <!-- Buscador de clientes -->
        <input type="text" id="buscador" placeholder="Buscar por nombre, apellidos o documento de identidad">

        <!-- Lista de clientes -->
        <div id="tablaClientes"></div>
    </section> */

// Datos de clientes
var clientes = [];
var clienteIdCounter = 1; // Contador para generar IDs únicos para clientes

// Función para registrar un nuevo cliente
function registrarCliente(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var numeroIdentificacion = document.getElementById("numeroIdentificacion").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var nacionalidad = document.getElementById("nacionalidad").value;

    // Crear un objeto cliente con los datos ingresados
    var cliente = {
        id: clienteIdCounter++,
        numeroIdentificacion: numeroIdentificacion,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        correoElectronico: correoElectronico,
        fechaNacimiento: fechaNacimiento,
        nacionalidad: nacionalidad,
        puntosFidelizacion: 0 // Establecer puntos de fidelización inicial en 0

    };

    // Agregar el cliente a la lista de clientes
    clientes.push(cliente);

    // Limpiar el formulario
    document.getElementById("registroClienteForm").reset();

    // Actualizar la lista de clientes
    actualizarListaClientes();
    cargarOpcionesClientes(); // Agregar esta línea para cargar las opciones de clientes en el formulario de compra de tiquetes
}

// Función para buscar clientes por nombre, apellidos o documento de identidad
function buscarClientes() {
    var filtro = document.getElementById("buscador").value.toLowerCase();

    // Filtrar los clientes por el criterio de búsqueda
    var clientesFiltrados = clientes.filter(function (cliente) {
        return (
            cliente.nombres.toLowerCase().includes(filtro) ||
            cliente.apellidos.toLowerCase().includes(filtro) ||
            cliente.numeroIdentificacion.toLowerCase().includes(filtro)
        );
    });

    // Actualizar la lista de clientes con los resultados de búsqueda
    actualizarListaClientes(clientesFiltrados);
}

// Función para eliminar un cliente
function eliminarCliente(index) {
    clientes.splice(index, 1);
    actualizarListaClientes();
}

// Función para actualizar la lista de clientes en el HTML
function actualizarListaClientes(clientesMostrar) {
    var tablaClientesElement = document.getElementById("tablaClientes");
    tablaClientesElement.innerHTML = "";

    // Si no se proporciona la lista de clientes a mostrar, se utiliza la lista completa
    if (!clientesMostrar) {
        clientesMostrar = clientes;
    }

    // Crear la estructura de la tabla
    var tablaHTML =
        "<table>" +
        "<tr>" +
        "<th>Número de identificación</th>" +
        "<th>Nombres</th>" +
        "<th>Apellidos</th>" +
        "<th>Teléfono</th>" +
        "<th>Correo electrónico</th>" +
        "<th>Fecha de nacimiento</th>" +
        "<th>Nacionalidad</th>" +
        "<th>Acciones</th>" +
        "</tr>";

    // Generar las filas de la tabla con los datos de los clientes
    var filasHTML = clientesMostrar.map(function (cliente, index) {
        return (
            "<tr>" +
            "<td>" + cliente.numeroIdentificacion + "</td>" +
            "<td>" + cliente.nombres + "</td>" +
            "<td>" + cliente.apellidos + "</td>" +
            "<td>" + cliente.telefono + "</td>" +
            "<td>" + cliente.correoElectronico + "</td>" +
            "<td>" + cliente.fechaNacimiento + "</td>" +
            "<td>" + cliente.nacionalidad + "</td>" +
            "<td><button onclick=\"eliminarCliente(" + index + ")\">Eliminar</button></td>" +
            "</tr>"
        );
    });

    // Combinar las filas en el HTML de la tabla
    tablaHTML += filasHTML.join("");

    // Cerrar la tabla
    tablaHTML += "</table>";

    // Agregar la tabla de clientes al elemento HTML
    tablaClientesElement.innerHTML = tablaHTML;
}

// Agregar evento de envío del formulario de registro
document.getElementById("registroClienteForm").addEventListener("submit", registrarCliente);

// Agregar evento de entrada en el campo de búsqueda
document.getElementById("buscador").addEventListener("input", buscarClientes);

// Actualizar la lista de clientes inicialmente
actualizarListaClientes();