const btndecoraciones = document.getElementById('btn-secciones'),
      btnCerrar = document.getElementById('btn-menu-cerrar'),
      grid = document.getElementById('grid'),
      conterEnlacesNav = document.querySelector('#menu .container-enlaces-nav'),
      conterSubcategory = document.querySelector('#grid .contenedor-subcategoria'),
      responseMovil = () => window.innerWidth <= 800;

btndecoraciones.addEventListener('mouseover', () =>{
    if (!responseMovil()){
    grid.classList.add('activo')
    }
});

grid.addEventListener('mouseleave', () => {
    if(!responseMovil()){
        grid.classList.remove('activo');
    }
})

document.querySelectorAll('#menu .categoria a').forEach((elemento) => {
    elemento.addEventListener('mouseenter', (e) => {
        if(!responseMovil()){
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo')
                }
            })
        }
       
    })
 
});

// parte response

document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
    e.preventDefault(); 
    if(conterEnlacesNav.classList.contains('activo')){
        conterEnlacesNav.classList.remove('activo');
        document.querySelector('body').style.overflow = 'visible';
    } else {
        conterEnlacesNav.classList.add('activo');
        document.querySelector('body').style.overflow = 'hidden';
    }
})

//response movil

btndecoraciones.addEventListener('click', (e) => {
    e.preventDefault();
    grid.classList.add('activo');
    btnCerrar.classList.add('activo'); 

})

//boton regresar
document.querySelector('#grid .categoria .btn-regresar').addEventListener('click', (e) =>{
    e.preventDefault();
    grid.classList.remove('activo');
    btnCerrar.classList.remove('activo')

})

document.querySelectorAll('#menu .categoria a').forEach((elemento) => {
    elemento.addEventListener('click', (e) => {
        if(responseMovil()){
            conterSubcategory.classList.add('activo');
            document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
                categoria.classList.remove('activo');
                if(categoria.dataset.categoria == e.target.dataset.categoria){
                    categoria.classList.add('activo'); 
                }
            })
        }
    })
})

document.querySelectorAll('#grid .contenedor-subcategoria .btn-regresar').forEach((boton) => {
    boton.addEventListener('click', (e => {
        e.preventDefault();
        conterSubcategory.classList.remove('activo');
    }))
})

btnCerrar.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelectorAll('#menu .activo').forEach((elemento) =>{
        elemento.classList.remove('activo')
    })
    document.querySelector('body').style.overflow = 'visible';
})
