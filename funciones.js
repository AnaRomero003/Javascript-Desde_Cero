// Funciones

function Sumar(numero1, numero2){ // Palabra reservada function + nombre de la funcion + parametros
    let total = numero1 + numero2;
    return total;
}

// Llamando a mi fucnion
let resultado = Sumar(10,10);
// return nos permite guardar el resultado en una variable

console.log(resultado);

console.log(Sumar(12,20));

Sumar(2,3); // Se ejecuta pero no se imprime nada

function Saludar(nombre){
    console.log("Hola, bienvenida/o " + nombre); // Concatenar
}

Saludar("Carolina");
Saludar("Monserrat");

console.log(Sumar(2,3));

function Restar(a,b){
    let total = a - b;
    console.log(total); // Con console.log SOLO se imprime en consola
}
// No se guarda el resultado en una variable
Restar(13,2);

function Casita(){
    let nombre = "Ana";
    let apellido = "Romero"
    console.log("Esta es una casita");
}

Casita();

// console.log(nombre); // No se puede acceder porque esta dentro de una funcion
// Scope de bloque

let nombre = "Vanessa"  // Variable global
let edad = 23;
let ciudad = "Ciudad de Mexico"

console.log("Ella se llama " + nombre + " tiene " + edad + " y vive en " + ciudad);


console.log(`Ella se llama ${nombre} tiene ${edad} y vive en ${ciudad}`);
// Actualizacion de ES6 (2015)


let usuario = prompt("¿Cual es tu nombre?");
let perros = prompt("¿Cuantos perros tienes?");
let gatos = prompt("¿Cuantos gatos tienes?");


let total = parseInt(gatos) + parseInt(perros); // Convertir string a numero
let total_2 = Number(gatos) + Number(perros);// Convertir el estring a numero

// Vemos datos en consola
console.log(`${usuario} tiene ${gatos} gatos y ${perros} perros. En total tiene ${total} mascotas`);

// Vemos datos en un pop up
alert(`${usuario} tiene ${gatos} gatos y ${perros} perros. En total tiene ${total} mascotas`);

// Vemos los datos en la pagina
document.write(`${usuario} tiene ${gatos} gatos y ${perros} perros. En total tiene ${total} mascotas`);