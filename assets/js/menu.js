const boton = document.querySelector('.boton')
const menu = document.querySelector('.menu_navegacion')


boton.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread') 
        && e.target != menu && e.target != boton){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})


