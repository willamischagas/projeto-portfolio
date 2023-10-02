// abrir e fechar o menu mobile //
let btnmenuabrir = document.getElementById('btn-menu-abrir')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('menu-overlay')

// aqui e o botoes menu que abrir o menu mobile  //
btnmenuabrir.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})
// fechar o botao menu mobile  //
menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
// fecharmento do menu mobile total //
overlay.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})
// final do abrimento e fechamento do menu mobile //

// estilo do formulario faser o envio de contato do formulario //
const nome = document.querySelector('nome');

const email = document.querySelector('e-mail');

const numero = document.querySelector('numero');



// final do abrimento e fechamento do menu formulario //