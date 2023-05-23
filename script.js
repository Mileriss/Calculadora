var corpo = document.getElementById("corpo");
var estilos = document.getElementsByClassName("estilos");
var tela_geral = document.getElementById("tela-geral");
var tela_resultado = document.getElementById("tela-resultado");
var div_operacao = document.getElementById("operacoes");
var btn_operacao = document.getElementsByClassName("btn-operacao");
var btn_numeros = document.getElementsByClassName("btn-num");
var btn_limpar = document.getElementById("btn-limpar");
var btn_igual = document.getElementById("btn-igual");

/*Eventos para alterar o estilo*/
var btn_padrao = document.getElementById("btn-padrao");
btn_padrao.addEventListener("click", ()=>{
    corpo.classList.remove("fundo-vermelho","fundo-verde","fundo-roxo","fundo-preto","fundo-contraste")
    corpo.classList.add("fundo-padrao")
    for(est of estilos){
        est.classList.remove("sombra-btn")
    }
    btn_padrao.classList.add("sombra-btn")
    tela_geral.classList.remove("tg-vermelho", "tg-verde", "tg-roxo", "tg-preto", "tg-contraste")
    tela_geral.classList.add("tg-padrao")
    tela_resultado.classList.remove("tr-vermelho", "tr-verde", "tr-roxo", "tr-preto", "tr-contraste")
    tela_resultado.classList.add("tr-padrao")
    div_operacao.classList.remove("op-vermelho", "op-verde", "op-roxo", "op-preto", "op-contraste")
    div_operacao.classList.add("op-padrao")
    for(btn_op of btn_operacao){
        btn_op.classList.remove("btn-op-vermelho", "btn-op-verde", "btn-op-roxo", "btn-op-preto", "btn-op-contraste")
        btn_op.classList.add("btn-op-padrao")
    }
    for(btn_num of btn_numeros){
        btn_num.classList.remove("btn-num-vermelho", "btn-num-verde", "btn-num-roxo", "btn-num-preto", "btn-num-contraste")
        btn_num.classList.add("btn-num-padrao")
    }
    btn_limpar.classList.remove("limpar-vermelho", "limpar-verde", "limpar-roxo", "limpar-preto", "limpar-contraste")
    btn_limpar.classList.add("limpar-padrao")
    btn_igual.classList.remove("igual-vermelho", "igual-verde", "igual-roxo", "igual-preto", "igual-contraste")
    btn_igual.classList.add("igual-padrao")

})

var btn_vermelho = document.getElementById("btn-vermelho");
btn_vermelho.addEventListener("click", ()=>{
    corpo.classList.remove("fundo-padrao","fundo-verde","fundo-roxo","fundo-preto","fundo-contraste")
    corpo.classList.add("fundo-vermelho")
    for(est of estilos){
        est.classList.remove("sombra-btn")
    }
    btn_vermelho.classList.add("sombra-btn")
    tela_geral.classList.remove("tg-padrao", "tg-verde", "tg-roxo", "tg-preto", "tg-contraste")
    tela_geral.classList.add("tg-vermelho")
    tela_resultado.classList.remove("tr-padrao", "tr-verde", "tr-roxo", "tr-preto", "tr-contraste")
    tela_resultado.classList.add("tr-vermelho")
    div_operacao.classList.remove("op-padrao", "op-verde", "op-roxo", "op-preto", "op-contraste")
    div_operacao.classList.add("op-vermelho")
    for(btn_op of btn_operacao){
        btn_op.classList.remove("btn-op-padrao", "btn-op-verde", "btn-op-roxo", "btn-op-preto", "btn-op-contraste")
        btn_op.classList.add("btn-op-vermelho")
    }
    for(btn_num of btn_numeros){
        btn_num.classList.remove("btn-num-padrao", "btn-num-verde", "btn-num-roxo", "btn-num-preto", "btn-num-contraste")
        btn_num.classList.add("btn-num-vermelho")
    }
    btn_limpar.classList.remove("limpar-padrao", "limpar-verde", "limpar-roxo", "limpar-preto", "limpar-contraste")
    btn_limpar.classList.add("limpar-vermelho")
    btn_igual.classList.remove("igual-padrao", "igual-verde", "igual-roxo", "igual-preto", "igual-contraste")
    btn_igual.classList.add("igual-vermelho")
})

var btn_verde = document.getElementById("btn-verde");
btn_verde.addEventListener("click", ()=>{
    corpo.classList.remove("fundo-padrao","fundo-vermelho","fundo-roxo","fundo-preto","fundo-contraste")
    corpo.classList.add("fundo-verde")
    for(est of estilos){
        est.classList.remove("sombra-btn")
    }
    btn_verde.classList.add("sombra-btn")
    tela_geral.classList.remove("tg-padrao", "tg-vermelho", "tg-roxo", "tg-preto", "tg-contraste")
    tela_geral.classList.add("tg-verde")
    tela_resultado.classList.remove("tr-padrao", "tr-vermelho", "tr-roxo", "tr-preto", "tr-contraste")
    tela_resultado.classList.add("tr-verde")
    div_operacao.classList.remove("op-padrao", "op-vermelho", "op-roxo", "op-preto", "op-contraste")
    div_operacao.classList.add("op-verde")
    for(btn_op of btn_operacao){
        btn_op.classList.remove("btn-op-padrao", "btn-op-vermelho", "btn-op-roxo", "btn-op-preto", "btn-op-contraste")
        btn_op.classList.add("btn-op-verde")
    }
    for(btn_num of btn_numeros){
        btn_num.classList.remove("btn-num-padrao", "btn-num-vermelho", "btn-num-roxo", "btn-num-preto", "btn-num-contraste")
        btn_num.classList.add("btn-num-verde")
    }
    btn_limpar.classList.remove("limpar-padrao", "limpar-vermelho", "limpar-roxo", "limpar-preto", "limpar-contraste")
    btn_limpar.classList.add("limpar-verde")
    btn_igual.classList.remove("igual-padrao", "igual-vermelho", "igual-roxo", "igual-preto", "igual-contraste")
    btn_igual.classList.add("igual-verde")
})

var btn_roxo = document.getElementById("btn-roxo");
btn_roxo.addEventListener("click", ()=>{
    corpo.classList.remove("fundo-padrao","fundo-vermelho","fundo-verde","fundo-preto","fundo-contraste")
    corpo.classList.add("fundo-roxo")
    for(est of estilos){
        est.classList.remove("sombra-btn")
    }
    btn_roxo.classList.add("sombra-btn")
    tela_geral.classList.remove("tg-padrao", "tg-vermelho", "tg-verde", "tg-preto", "tg-contraste")
    tela_geral.classList.add("tg-roxo")
    tela_resultado.classList.remove("tr-padrao", "tr-vermelho", "tr-verde", "tr-preto", "tr-contraste")
    tela_resultado.classList.add("tr-roxo")
    div_operacao.classList.remove("op-padrao", "op-vermelho", "op-verde", "op-preto", "op-contraste")
    div_operacao.classList.add("op-roxo")
    for(btn_op of btn_operacao){
        btn_op.classList.remove("btn-op-padrao", "btn-op-vermelho", "btn-op-verde", "btn-op-preto", "btn-op-contraste")
        btn_op.classList.add("btn-op-roxo")
    }
    for(btn_num of btn_numeros){
        btn_num.classList.remove("btn-num-padrao", "btn-num-vermelho", "btn-num-verde", "btn-num-preto", "btn-num-contraste")
        btn_num.classList.add("btn-num-roxo")
    }
    btn_limpar.classList.remove("limpar-padrao", "limpar-vermelho", "limpar-verde", "limpar-preto", "limpar-contraste")
    btn_limpar.classList.add("limpar-roxo")
    btn_igual.classList.remove("igual-padrao", "igual-vermelho", "igual-verde", "igual-preto", "igual-contraste")
    btn_igual.classList.add("igual-roxo")
})

var btn_preto = document.getElementById("btn-preto");
btn_preto.addEventListener("click", ()=>{
    corpo.classList.remove("fundo-padrao","fundo-vermelho","fundo-verde","fundo-roxo","fundo-contraste")
    corpo.classList.add("fundo-preto")
    for(est of estilos){
        est.classList.remove("sombra-btn")
    }
    btn_preto.classList.add("sombra-btn")
    tela_geral.classList.remove("tg-padrao", "tg-vermelho", "tg-verde", "tg-roxo", "tg-contraste")
    tela_geral.classList.add("tg-preto")
    tela_resultado.classList.remove("tr-padrao", "tr-vermelho", "tr-verde", "tr-roxo", "tr-contraste")
    tela_resultado.classList.add("tr-preto")
    div_operacao.classList.remove("op-padrao", "op-vermelho", "op-verde", "op-roxo", "op-contraste")
    div_operacao.classList.add("op-preto")
    for(btn_op of btn_operacao){
        btn_op.classList.remove("btn-op-padrao", "btn-op-vermelho", "btn-op-verde", "btn-op-roxo", "btn-op-contraste")
        btn_op.classList.add("btn-op-preto")
    }
    for(btn_num of btn_numeros){
        btn_num.classList.remove("btn-num-padrao", "btn-num-vermelho", "btn-num-verde", "btn-num-roxo", "btn-num-contraste")
        btn_num.classList.add("btn-num-preto")
    }
    btn_limpar.classList.remove("limpar-padrao", "limpar-vermelho", "limpar-verde", "limpar-roxo", "limpar-contraste")
    btn_limpar.classList.add("limpar-preto")
    btn_igual.classList.remove("igual-padrao", "igual-vermelho", "igual-verde", "igual-roxo", "igual-contraste")
    btn_igual.classList.add("igual-preto")
})

var btn_contraste = document.getElementById("btn-contraste");
btn_contraste.addEventListener("click", ()=>{
    corpo.classList.remove("fundo-padrao","fundo-vermelho","fundo-verde","fundo-roxo","fundo-preto")
    corpo.classList.add("fundo-contraste")
    for(est of estilos){
        est.classList.remove("sombra-btn")
    }
    btn_contraste.classList.add("sombra-btn")
    tela_geral.classList.remove("tg-padrao", "tg-vermelho", "tg-verde", "tg-roxo", "tg-preto")
    tela_geral.classList.add("tg-contraste")
    tela_resultado.classList.remove("tr-padrao", "tr-vermelho", "tr-verde", "tr-roxo", "tr-preto")
    tela_resultado.classList.add("tr-contraste")
    div_operacao.classList.remove("op-padrao", "op-vermelho", "op-verde", "op-roxo", "op-preto")
    div_operacao.classList.add("op-contraste")
    for(btn_op of btn_operacao){
        btn_op.classList.remove("btn-op-padrao", "btn-op-vermelho", "btn-op-verde", "btn-op-roxo", "btn-op-preto")
        btn_op.classList.add("btn-op-contraste")
    }
    for(btn_num of btn_numeros){
        btn_num.classList.remove("btn-num-padrao", "btn-num-vermelho", "btn-num-verde", "btn-num-roxo", "btn-num-preto")
        btn_num.classList.add("btn-num-contraste")
    }
    btn_limpar.classList.remove("limpar-padrao", "limpar-vermelho", "limpar-verde", "limpar-roxo", "limpar-preto")
    btn_limpar.classList.add("limpar-contraste")
    btn_igual.classList.remove("igual-padrao", "igual-vermelho", "igual-verde", "igual-roxo", "igual-preto")
    btn_igual.classList.add("igual-contraste")
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