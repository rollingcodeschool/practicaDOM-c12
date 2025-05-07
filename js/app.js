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

const btnCambiarTitulo = document.querySelector('#btnCambiarTituloInnerHTML')
console.log(btnCambiarTitulo)

//agregar un manejador de eventos
btnCambiarTitulo.addEventListener('click', modificarTituloConInnerHTML)