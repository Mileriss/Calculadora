var css = document.getElementById("css-padrao")
var btn_padrao = document.getElementById("btn-padrao")
var btn_vermelho = document.getElementById("btn-vermelho")
var btn_verde = document.getElementById("btn-verde")
var btn_roxo = document.getElementById("btn-roxo")
var btn_preto = document.getElementById("btn-preto")
var btn_constraste = document.getElementById("btn-contraste")

/*Eventos para alterar o estilo*/
btn_padrao.addEventListener("click", ()=>{
    css.href = "tema_padrao.css"
})

btn_vermelho.addEventListener("click", ()=>{
    css.href = "tema_vermelho.css"
})

btn_verde.addEventListener("click", ()=>{
    css.href = "tema_verde.css"
})

btn_roxo.addEventListener("click", ()=>{
    css.href = "tema_roxo.css"
})

btn_preto.addEventListener("click", ()=>{
    css.href = "tema_preto.css"
})

btn_constraste.addEventListener("click", ()=>{
    css.href = "tema_constraste.css"
})