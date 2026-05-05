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