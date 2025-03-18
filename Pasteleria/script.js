document.addEventListener('DOMContentLoaded', () =>{
    //Obtnecion de elemntos por su ID
    const inicio = document.getElementById('inicio');
    const productos = document.getElementById('productos');
    const contacto = document.getElementById('contacto');

    //Obtencion de elementos del DOM por su ID del menu de navegacion
    const menuInicio = document.getElementById('menu-inicio');
    const menuProductos = document.getElementById('menu-productos');
    const menuContacto = document.getElementById('menu-contacto');

    //Obtencion de elemntos del DOM para el carrito de compras
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    let total = 0; //Variable para almacenar el total del carrito

    //Obtencion de los elementos del DOM para el formulario
    const formularioContacto = document.getElementById('formulario-contacto');
    const mensajeEnviado = document.getElementById('mensaje-enviado');

    //Evento para mostrar la seccion de inicio y ocultar las demas
    menuInicio.addEventListener('click', (e) =>{
        e.preventDefault(); //Evitar un comportamiento por defecto
        inicio.style.display = 'block';//Mostrar
        productos.style.display = 'none';//Ocultar
        contacto.style.display = 'none';//Ocultar
    });

    //Evento para mostrar la seccion de menu y ocultar las demas
    menuProductos.addEventListener('click', (e) =>{
        e.preventDefault(); //Evitar un comportamiento por defecto
        inicio.style.display = 'none';
        productos.style.display = 'block';
        contacto.style.display = 'none';
    });

    //Evento para mostrar la seccion de contacto y ocultar las demas
    menuContacto.addEventListener('click', (e) =>{
        e.preventDefault(); //Evitar un comportamiento por defecto
        inicio.style.display = 'none';
        productos.style.display = 'none';
        contacto.style.display = 'block';
    });

    //Evento para agregar productos al carrito
    productos.addEventListener('click', (e) =>{
        if(e.target.classList.contains('agregar-carrito')){
            const nombre = e.target.dataset.nombre; //Obtiene el nombre del producto
            const precio = parseInt(e.target.dataset.precio); //Obtiene el precio del producto

            const nuevoItem = document.createElement('li');
            nuevoItem.textContent = `${nombre} - $${precio}`;
            listaCarrito.appendChild(nuevoItem);

            total += precio; //Suma el precio de los productos
            console.log(total);
            actualizarTotalCarrito(); //Actualiza el total del carrito

        }
        // target - Es una propiedad que despliega el elemento que desencadena
        // classList - Nos permite acceder a las clases de un elemento
    });


    // Ejemplo de querySelector para manipular el total del carrito
    const totalElemento = document.querySelector('#total-carrito');
    function actualizarTotalCarrito(){
        totalElemento.textContent = total;
    }

    // Titulo del carrito con querySelector
    const tituloCarrito = document.querySelector('#carrito h2');
    tituloCarrito.textContent = 'Sus pasteles:';

    //Simular el envio de nuestro fromulario
    formularioContacto.addEventListener('submit', function(e){
        e.preventDefault(); //Evita el comportamiento por defecto
        formularioContacto.style.display = 'none'; //Oculta el formulario
        mensajeEnviado.style.display = 'block'; //Mostrar el mensaje de enviado
    });

    //Ejemplo con querySelector para mostrar el precio del producto
    productos.addEventListener('mouseover', (e) =>{
        if(e.target.classList.contains('producto')){
            const precio = e.target.querySelector('.agregar-carrito').dataset.precio; //Encuentra el precio dentro del producto (en el boton)
            e.target.setAttribute('title', `Precio: $${precio}`); //Lo muestra como tooltip
        }
    });
})