// Función para registrar o editar un cliente
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

    // Verificar si el cliente ya existe
    var clienteExistente = clientes.find(function (cliente) {
        return (
            cliente.numeroIdentificacion === numeroIdentificacion &&
            cliente.nombres === nombres &&
            cliente.apellidos === apellidos
        );
    });

    if (clienteExistente) {
        // El cliente ya existe, actualizar sus datos
        clienteExistente.telefono = telefono;
        clienteExistente.correoElectronico = correoElectronico;
        clienteExistente.fechaNacimiento = fechaNacimiento;
        clienteExistente.nacionalidad = nacionalidad;
    } else {
        // El cliente no existe, crear un nuevo cliente
        var cliente = {
            numeroIdentificacion: numeroIdentificacion,
            nombres: nombres,
            apellidos: apellidos,
            telefono: telefono,
            correoElectronico: correoElectronico,
            fechaNacimiento: fechaNacimiento,
            nacionalidad: nacionalidad,
            puntosFidelizacion: 0
        };

        // Agregar el cliente a la lista de clientes
        clientes.push(cliente);
    }

    // Limpiar el formulario
    document.getElementById("registroClienteForm").reset();

    // Actualizar la lista de clientes
    actualizarListaClientes();
}

// Función para editar los datos de un cliente
function editarCliente(index) {
    // Obtener los datos del cliente a editar
    var cliente = clientes[index];

    // Llenar el formulario de registro con los datos del cliente
    document.getElementById("numeroIdentificacion").value = cliente.numeroIdentificacion;
    document.getElementById("nombres").value = cliente.nombres;
    document.getElementById("apellidos").value = cliente.apellidos;
    document.getElementById("telefono").value = cliente.telefono;
    document.getElementById("correoElectronico").value = cliente.correoElectronico;
    document.getElementById("fechaNacimiento").value = cliente.fechaNacimiento;
    document.getElementById("nacionalidad").value = cliente.nacionalidad;

    // Cambiar el texto del botón del formulario a "Editar"
    document.getElementById("registrarClienteBtn").textContent = "Editar";
    document.getElementById("registrarClienteBtn").removeEventListener("click", registrarCliente);

    // Agregar el evento de click para editar el cliente
    document.getElementById("registrarClienteBtn").addEventListener("click", function () {
        actualizarCliente(index);
    });
}

// Función para actualizar los datos de un cliente
function actualizarCliente(index) {
    // Obtener los nuevos valores del formulario
    var numeroIdentificacion = document.getElementById("numeroIdentificacion").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var telefono = document.getElementById("telefono").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var nacionalidad = document.getElementById("nacionalidad").value;

    // Actualizar los datos del cliente
    clientes[index].numeroIdentificacion = numeroIdentificacion;
    clientes[index].nombres = nombres;
    clientes[index].apellidos = apellidos;
    clientes[index].telefono = telefono;
    clientes[index].correoElectronico = correoElectronico;
    clientes[index].fechaNacimiento = fechaNacimiento;
    clientes[index].nacionalidad = nacionalidad;

    // Limpiar el formulario
    document.getElementById("registroClienteForm").reset();

    // Restaurar el texto y el evento del botón del formulario
    document.getElementById("registrarClienteBtn").textContent = "Registrar";
    document.getElementById("registrarClienteBtn").removeEventListener("click", actualizarCliente);
    document.getElementById("registrarClienteBtn").addEventListener("click", registrarCliente);

    // Actualizar la lista de clientes
    actualizarListaClientes();
}

// Función para generar los botones de acción en la tabla de clientes
function generarBotonesAccion(index) {
    var editarBtn = "<button onclick=\"editarCliente(" + index + ")\">Editar</button>";
    var eliminarBtn = "<button onclick=\"eliminarCliente(" + index + ")\">Eliminar</button>";
    return editarBtn + " " + eliminarBtn;
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
            "<td>" + generarBotonesAccion(index) + "</td>" +
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

// Actualizar la lista de clientes inicialmente
actualizarListaClientes();
