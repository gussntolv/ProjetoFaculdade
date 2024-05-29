let btnlogin = document.getElementById("btnlogin");
let btncad = document.getElementById("btncad");
let titulo = document.getElementById("titulo");
let userField = document.getElementById("userField");
let form = document.getElementById("form");

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
document.getElementById('irParaOutraPagina').addEventListener('click', function() {
    window.location.href = 'outra_pagina.html';
});

 