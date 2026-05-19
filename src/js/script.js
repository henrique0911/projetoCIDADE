window.onload = function(){
    const intro = document.getElementById("inicio");
    setTimeout(()=>{
        intro.classList.add("efeito-out");
        setTimeout(()=>{
            intro.style.display="none";
            content.classList.add("efeito-in");
        },1000)
    },2000)
}
function trocar(cor){
 document.body.style.background=cor;
}

/* menu hamburguer */

document.addEventListener('DOMContentLoaded',()=>{
    const menuIcone = document.getElementById('menu-icone');
    const navMenu = document.querySelector('nav');
    if (menuIcone && navMenu){
        menuIcone.onclick=()=>{
            navMenu.classList.toggle('active');
            menuIcone.classList.toggle('open');
        }
    }
})