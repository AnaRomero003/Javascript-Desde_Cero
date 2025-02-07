// Tipo de mascotas = Gato, Perro, Hamster
// Condicionales (jaula mediana, jaula grande, jaula pequeña)

let tipoDeMascota = "Hamster";

if(tipoDeMascota === "Perro"){
    console.log("Si tienes un perro necesitas la jaula grande.");
} else if(tipoDeMascota === "Gato"){
    console.log("Si tienes un gato necesitas la jaula mediana.");
}else if(tipoDeMascota === "Hamster"){
    console.log("Si tienes un hamster necesitas la jaula pequeña.");
}else{
    console.log("No contamos con jaulas para esa mascota.")
}

//Semaforo color = Rojo, Amarillo, Verde
//Rojo = Alto, Amarillo = Detente, Verde = Siga

let color = "Amarillo"

console.log("---------Semaforo----------");
if(color === "Rojo"){
    console.log("Si el semaforo es rojo ALTO.");
} else if(color === "Amarillo"){
    console.log("Si el semaforo es amarillo DETENTE.");
}else if(color === "Verde"){
    console.log("Si el semaforo es verde SIGA.");
}else{
    console.log("No existe ese color en el semaforo.")
}

//Para poder obtener una beca

let creditos = 0;// Minimo 10 creditos
let promedio = .5;// Minimo 8.5
console.log("---------Beca----------");
if(creditos >= 10 && promedio >=8.5){
    console.log("Tienes derecho a una beca");
}else if(creditos >= 10 && promedio <8.5){
    console.log("Tu promedio debe subir");
}else if(creditos < 10 && promedio >=8.5){
    console.log("Te faltan creditos");
}else{
    console.log("No tienes derecho a una beca");
}

//Ejercicio de campus
/*
nota es 90 o mas = Excelente
nota entre 75 y 89 = Bien
nota entre 60 y 74 = Suficiente
nota es menor de 60 = No Aprueba
 */

let nota = 59;

console.log("--------Ejercicio de CAMPUS----------");
if(nota >= 90){
    console.log("Excelente");
}else if(nota >= 75 && nota <= 89){
    console.log("Bien");
}else if(nota >= 60 && nota <= 74){
    console.log("Suficiente");
}else{
    console.log("No aprueba");
}