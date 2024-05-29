let btnlogin = document.getElementById("btnlogin");
let btncad = document.getElementById("btncad");
let titulo = document.getElementById("titulo");
let userField = document.getElementById("userField");
let form = document.getElementById("form");

document.getElementById('irParaOutraPagina').addEventListener('click', function() {
    // Redirecionar para outra página
    window.location.href = 'outra_pagina.html';
});

 



btnlogin.onclick = function(){
    userField.style.maxHeight = "0";
    titulo.innerHTML = "Faça seu Login"
    btncad.classList.remove("desativado");
    btnlogin.classList.add("desativado")
}

btncad.onclick = function(){
    userField.style.maxHeight = "60px";
    titulo.innerHTML = "Cadastre-se"
    btncad.classList.add("desativado");
    btnlogin.classList.remove("desativado")
}