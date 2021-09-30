function capturar() {
    console.log("capturado");

    function agregarRegistro(apellido, nombre, telefono, correo, contrasena) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.telefono = telefono;
        this.correo = correo;
        this.contrasena = contrasena;
    }
    let nombrecapturar = document.getElementById("nombre").value;

    let apellidocapturar = document.getElementById("apellido").value;
    let telefonocapturar = document.getElementById('telefono').value;
    let correocapturar = document.getElementById('correo').value;
    let contrasenacapturar = document.getElementById('contrasena').value;
    console.log(nombrecapturar, apellidocapturar, telefonocapturar, correocapturar, contrasenacapturar);

    // arreglo global
    nuevosujeto = new agregarRegistro(apellidocapturar, nombrecapturar, telefonocapturar, correocapturar, contrasenacapturar);
    agregar();
    console.log(nuevosujeto);


}
// array
var basedatos = [];

function agregar() {

    console.log("capturado");
    // añador elemento
    basedatos.push(nuevosujeto);
    console.log(basedatos);
}

function ordenarArreglo(nuevosujeto) {
    basedatos.sort((a, b) => {
        if (a.apellidocapturar < b.apellidocapturar) {
            return -1;
        }
        if (a.apellidocapturar < b.apellidocapturar) {
            return 1;
        }
    })
}