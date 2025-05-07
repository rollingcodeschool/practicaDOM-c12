function modificarTitulo(){
    console.log('Desde la funcion modificar titulo')
    //obtener el titulo por el id
    const titulo = document.getElementById('titulo')
    titulo.textContent = 'Nuevo titulo desde JS'
    titulo.classList.add('display-6')
    console.log(titulo)
    //modificarlo
}