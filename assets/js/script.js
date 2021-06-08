// Desafío - Lista de Animales
// Autor: Daniel Vega - https://cianware.com

// Definición de clase
class Propietario{
    constructor(nombre,direccion,telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    // Método para generar el mensaje con la información del dueño de la mascota
    datosPropietario(){
        return `El nombre del dueño es: ${this.nombre}. El domicilio es ${this.direccion}, y el número telefónico de contacto: ${this.telefono}`;
    }
}

// Definición de clase
class Animal extends Propietario{
    constructor(nombre,direccion,telefono,tipo){
        super(nombre,direccion,telefono);
        this._tipo = tipo;
    }

    // Método Get
    get tipo(){
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

// Definición de clase
class Mascota extends Animal{
    constructor(nombre,direccion,telefono,tipo,nombreMascota,enfermedad){
        super(nombre,direccion,telefono,tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    // Método Get
    get nombreMascota(){
        return this._nombreMascota;
    }

    // Método Set
    set nombreMascota(nuevo_nombreMascota){
        this._nombreMascota = nuevo_nombreMascota;
    }

    // Método Get
    get enfermedad(){
        return this._enfermedad;
    }

    // Método Set
    set enfermedad(nuevo_enfermedad){
        this._enfermedad = nuevo_enfermedad;
    }
}

//----------------------------------------------------

// Obteniendo formulario
let formulario = document.querySelector('form');

// Método para obtener los datos desde el formulario, desplegar información
// en la página según la opción elegida en el elemento <select>, a través
// de dos elementos <li> incrustados en el elemento <ul>
let consulta = (event) => {
    event.preventDefault();

    let dueño = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombreMascota = document.getElementById('nombreMascota').value;
    let tipo = document.getElementById('tipo').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let resultado = document.querySelector('ul');

    if( tipo == 'perro'){
        let perro = new Mascota(dueño,direccion,telefono,tipo,nombreMascota,enfermedad);
        resultado.innerHTML = `<li>${perro.datosPropietario()}</li>
                                <li>${perro.tipo}, mientras que el nombre de la mascota es: ${perro.nombreMascota} y la enfermedad es: ${perro.enfermedad}</li>`;
    } else if (tipo == 'gato'){
        let gato = new Mascota(dueño,direccion,telefono,tipo,nombreMascota,enfermedad);
        resultado.innerHTML = `<li>${gato.datosPropietario()}</li>
                                <li>${gato.tipo}, mientras que el nombre de la mascota es: ${gato.nombreMascota} y la enfermedad es: ${gato.enfermedad}</li>`;
    } else if (tipo == 'conejo'){
        let conejo = new Mascota(dueño,direccion,telefono,tipo,nombreMascota,enfermedad);
        resultado.innerHTML = `<li>${conejo.datosPropietario()}</li>
                                <li>${conejo.tipo}, mientras que el nombre de la mascota es: ${conejo.nombreMascota} y la enfermedad es: ${conejo.enfermedad}</li>`;
    }

    // Limpiar campos del formulario
    document.getElementById('propietario').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('nombreMascota').value = '';
    document.getElementById('tipo').value = 'perro';
    document.getElementById('enfermedad').value = '';
    
}

// Método de escucha incluido en el formulario, que lanzará el método
// consulta() al hacer click en el botón del formulario.
formulario.addEventListener('submit',consulta);