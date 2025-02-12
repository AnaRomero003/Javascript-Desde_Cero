

let verduras = ['Lechuga', 'Tomate', 'Cebolla', 'Jitomate', 'Papa', 'Pimiento']; // Arreglo con datos

console.log(verduras[0]);
console.log(verduras[1]);
console.log(verduras[2]);
console.log(verduras[3]);

console.log(verduras.length);

console.log("Imprimiendo verduras con ciclo for");

for(let indice = 0; indice < verduras.length; indice++){
    console.log(verduras[indice]);
}

console.log("Metodos de arreglos");
let personas = []; // Arreglo vacio

personas.push('Ana'); // Agrega un elemento al final del arreglo
personas.push('Diego');
personas.push('Liset');
personas.push('Marcela');
console.log(personas);

personas.pop(); // Elimina el ultimo elemento del arreglo
console.log(personas);

personas.unshift('Alex'); // Agregando un elemento al inicio de mi arreglo
personas.unshift('Yolanda');
console.log(personas);

personas.shift(); // Elimina el primer elemento del arreglo
console.log(personas);

personas[1] = 'Monica'; // Modificar un elemento de un arreglo
console.log(personas);


// Ejercio de Campus
console.log("----Ejercicio de Campus----");
console.log("Con ciclo for");
let frutas = ['Fresa', 'Sandia', 'Papaya', 'Arandano', 'Uva', 'Manzana'];

let cantidad = [21, 10, 50, 12, 5, 24];

for(let i = 0; i < frutas.length; i++){
    console.log("Fruta: " + frutas[i] + ", Cantidad: " + cantidad[i]);
}

console.log("Con ciclo while");
let cont = 0;
while(cont < frutas.length){
    console.log("Fruta: " + frutas[cont] + ", Cantidad: " + cantidad[cont]);
    cont++;
}

// Ejercio de Campus corregido
let conteoFrutas = {};

for(let ind = 0; ind < frutas.length; ind++){
    let fruta = frutas[ind];
    if(conteoFrutas[fruta]){
        conteoFrutas[fruta]++;
    }else{
        conteoFrutas[fruta] = 1;
    }
}

console.log("Conteo de frutas usando ciclo for: ");
for(let fruta in conteoFrutas){
    console.log(`${fruta}: ${conteoFrutas[fruta]}`);
}

conteo = 0;
while(conteo < frutas.length){
    let fruta = frutas[conteo];
    if(conteoFrutas[fruta]){
        conteoFrutas[fruta]++;
    }else{
        conteoFrutas[fruta] = 1;
    }
    conteo++;
}

console.log("Conteo de frutas usando ciclo while: ");
for(let fruta in conteoFrutas){
    console.log(`${fruta}: ${conteoFrutas[fruta]}`);
}