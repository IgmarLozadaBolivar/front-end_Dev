/* CODIGO PARA EL VIDEO DE FONDO PARA LA SECCION 1 */

/* <!-- Video de Fondo -->
    <div id="videoContenedor">
        <video id="videoFondo" autoplay loop muted></video>
        <div id="contenido">

            <h1>Inicio</h1>
            <p>Contenido adicional aqui...</p>

        </div>
</div> */

// Creacion de un elemento (video)
var videoElement = document.getElementById("videoFondo");

// Funcion carga de video
function videoCarga() {
    var videoFuente = document.createElement("source");
    videoFuente.src = "./videos/travelExp.mp4";
    videoFuente.type = "video/mp4";
    videoElement.appendChild(videoFuente);
    videoElement.load();
}

// Llamado a la funcion (videoCarga)
videoCarga();