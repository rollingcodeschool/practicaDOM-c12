function modificarTitulo(){
    console.log('Desde la funcion modificar titulo')
    //obtener el titulo por el id
    const titulo = document.getElementById('titulo')
    titulo.textContent = 'Nuevo titulo desde JS'
    titulo.classList.add('display-6')
    console.log(titulo)
    //modificarlo
}

function modificarTituloConInnerHTML(){
    console.log('desde la funcion modificarTituloConInnerHTML')
    //buscar el titulo
    const titulo = document.getElementById('titulo')
    //modificar el contenido del h5 de la card
    titulo.innerHTML = 'Texto usando <b>innerHTML</b>'
}

function ocultarTexto(){
    console.log('desde la funcion ocultarTexto')
    //buscar el titulo h5 de la card
    const titulos = document.getElementsByClassName('card-title');
    const botones = document.getElementsByTagName('button')
    console.log(botones[4])
    console.log(titulos[1])
    //ocultar el titulo
    if(botones[4].textContent === 'Ocultar texto' ){
        titulos[1].classList.add('d-none')
        botones[4].textContent = 'Mostrar texto'
    }else{
        titulos[1].classList.remove('d-none')
        botones[4].textContent = 'Ocultar texto'
    }
}

function eliminarTitulo(){
    const titulo = document.getElementById('tituloEliminar')
    if(titulo){
        titulo.remove();
        btnEliminar.classList.add('disabled')
    }
    //if(null) = false
    //if({a:1}) = true
}

function mostrarNombre(e){
 e.preventDefault(); //evitar que recargue la pagina   
 const parrafo = document.getElementById('parrafoNombre')
 const inputNombre = document.querySelector('input') // console.log(formulario.children[0].children[1]) 
 //buscar el texto escrito en el input del form
console.log(inputNombre.value)
 //mostrar el texto en el parrafo
//  parrafo.textContent = parrafo.textContent + inputNombre.value
 parrafo.textContent += inputNombre.value
}

function cambiarTheme(){
    const html = document.documentElement;
    const btnCambiarTheme = document.getElementById('btnCambiarTheme')
    const themeActual = html.getAttribute('data-bs-theme')
    //(condicion logica)? si es true : si es false
    html.setAttribute('data-bs-theme', themeActual==='dark'? 'light': 'dark')  
    themeActual==='dark'? btnCambiarTheme.className = 'btn btn-outline-dark' :  btnCambiarTheme.className = 'btn btn-outline-light' 
}

function agregarTarea(e){
    e.preventDefault();
    console.log('aqui deberia agregar una tarea')
    const lista = document.querySelector('.list-group')
    //seleccionar el texto que el usuario escribio en el input.value
    const tarea = document.querySelector('#tareaInput').value
    //voy a crear un <li> con el texto del input
    //insertar el li en el ul
    // lista.innerHTML =  lista.innerHTML + `<li class="list-group-item ">
    //             ${tarea}
    //           </li>`
    lista.innerHTML +=  `<li class="list-group-item ">
                ${tarea}
              </li>`
    //limpiar el formulario
    formularioTareas.reset();
}

const btnCambiarTitulo = document.querySelector('#btnCambiarTituloInnerHTML')
const btnEliminar = document.getElementById('btnEliminar')
const formulario = document.querySelector('form')
const formularioTareas = document.querySelector('#tareaForm')
console.log(formularioTareas)

//agregar un manejador de eventos
btnCambiarTitulo.addEventListener('click', modificarTituloConInnerHTML)
btnEliminar.addEventListener('click', eliminarTitulo )
formulario.addEventListener('submit',mostrarNombre)
formularioTareas.addEventListener('submit', agregarTarea)