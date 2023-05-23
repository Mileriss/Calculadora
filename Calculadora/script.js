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

/*Eventos para exibir o resultado da operação*/
function valorDisplay(valor){
    const tela_resultado = document.getElementById("tela-resultado")
    tela_resultado.value += valor;
}

function limparDisplay(){
    const tela_resultado = document.getElementById("tela-resultado")
    tela_resultado.value = ""
}

function resultadoDisplay(){
    const tela_resultado = document.getElementById("tela-resultado")
    const resultado = eval(tela_resultado.value);
    tela_resultado.value = resultado
}