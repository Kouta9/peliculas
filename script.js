let peliculas = []; 

function agregarPelicula() {
    let nombrePelicula = document.getElementById('nombrePelicula').value;
    let categoriaPelicula = document.getElementById('categoriaPelicula').value;
    let urlImagenPelicula = document.getElementById('urlImagenPelicula').value;

    if (nombrePelicula && categoriaPelicula && urlImagenPelicula) {
        let nuevaPelicula = {
            nombre: nombrePelicula,
            categoria: categoriaPelicula,
            imagen: urlImagenPelicula
        };

        peliculas.push(nuevaPelicula);
        mostrarPeliculas();

        
        document.getElementById('nombrePelicula').value = '';
        document.getElementById('categoriaPelicula').value = '';
        document.getElementById('urlImagenPelicula').value = '';
    } else {
        alert('You must complete all fields to add a movie.');
    }
}

function mostrarPeliculas() {
    let listaPeliculas = document.getElementById('peliculas');
    listaPeliculas.innerHTML = ''; 

    peliculas.forEach((pelicula, index) => {
        let li = document.createElement('li');
        li.className = 'pelicula'; 
        li.innerHTML = `
            <img src="${pelicula.imagen}" alt="${pelicula.nombre}">
            <span id="text_pelis">${pelicula.nombre} (${pelicula.categoria})</span>
            <button class="editar" onclick="editarPelicula(${index})">Edit</button>
            <button class="eliminar" onclick="eliminarPelicula(${index})">Delete</button>
        `;
        listaPeliculas.appendChild(li);
    });
}

function editarPelicula(index) {
    let pelicula = peliculas[index];

    
    let nombreInput = document.getElementById('editarNombre');
    let categoriaSelect = document.getElementById('editarCategoria');
    let imagenInput = document.getElementById('editarImagen');

    
    nombreInput.value = pelicula.nombre;
    categoriaSelect.value = pelicula.categoria;
    imagenInput.value = pelicula.imagen;

    
    document.getElementById('formularioEdicion').style.display = 'block';
    document.getElementById('formulario').style.display = 'none';

    
    document.getElementById('editarForm').onsubmit = function(event) {
        event.preventDefault(); 

        pelicula.nombre = nombreInput.value;
        pelicula.categoria = categoriaSelect.value;
        pelicula.imagen = imagenInput.value;

        
        document.getElementById('formularioEdicion').style.display = 'none';
        document.getElementById('formulario').style.display = 'block';

        mostrarPeliculas(); 
    };
}

function eliminarPelicula(index) {
    peliculas.splice(index, 1);
    mostrarPeliculas();
}
