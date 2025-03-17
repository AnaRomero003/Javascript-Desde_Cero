document.addEventListener('DOMContentLoaded', () => {
    const mostrarComentarios = document.getElementById('publicar');
    const divComentarios = document.getElementById('comentarioPublicado');
    const tituloComentarios = document.getElementById('tituloComentarios');

    let listaComentarios = []; // Contenedor para los comentarios
    
    mostrarComentarios.addEventListener('click',() => {
        // Obtener los valores del formulario
        const nombre = document.getElementById('nombre').value;
        const comentario = document.getElementById('comentario').value;

        // Validar que los campos no estén vacíos
        if (nombre.trim() === '' || comentario.trim() === '') {
            alert('Por favor, completa todos los campos.');
            return;
        }

        // Crear un objeto para el nuevo comentario
        const nuevoComentario = {
            nombre: nombre,
            comentario: comentario,
            fecha: new Date().toLocaleString() // Fecha y hora actual
        };

        // Agregar el comentario a la lista
        listaComentarios.push(nuevoComentario);

        // Limpiar los campos del formulario
        document.getElementById('nombre').value = '';
        document.getElementById('comentario').value = '';

        //Cambiar titulo de contenedor si es el primer comentario
        if (listaComentarios.length === 1) {
            tituloComentarios.textContent = "Comentarios subidos";
        }

        mostrarTodos(listaComentarios, divComentarios); // Mostrar todos los comentarios
    });

    function mostrarTodos(comentarios, contenedor) {
        // Eliminar solo los comentarios (divs con la clase "comentario")
        const comentariosActuales = contenedor.querySelectorAll('.comentario');
        comentariosActuales.forEach((comentario) => comentario.remove());

        // Recorrer la lista de comentarios y crear elementos HTML para cada uno
        comentarios.forEach((comentario, index) => {
            const comentarioDiv = document.createElement('div');
            comentarioDiv.classList.add('comentario'); // Agregar una clase para estilos
            comentarioDiv.innerHTML = `
                <h4>${comentario.nombre}</h4>
                <p>${comentario.comentario}</p>
                <small>Publicado el: ${comentario.fecha}</small>
                <button class="eliminar" data-index="${index}">Eliminar</button>
            `;
            contenedor.appendChild(comentarioDiv);
        });

        // Agregar event listeners a los botones de eliminar
        const botonesEliminar = document.querySelectorAll('.eliminar');
        botonesEliminar.forEach((boton) => {
            boton.addEventListener('click', () => {
                const index = boton.getAttribute('data-index'); // Obtener el índice del comentario
                listaComentarios.splice(index, 1); // Eliminar el comentario de la lista
                mostrarTodos(listaComentarios, divComentarios); // Actualizar la lista de comentarios

                // Cambiar el texto del titulo si no hay comentarios
                if (listaComentarios.length === 0) {
                    tituloComentarios.textContent = 'No hay comentarios por ahora';
                }
            });
        });
    }
});