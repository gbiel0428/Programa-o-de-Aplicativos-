function somar() {

    let numero1 = document.getElementById("input1").value;
    let numero2 = document.getElementById("input2").value;

    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    let resultado = numero1 + numero2;

    document.getElementById("Resultadocalculo").innerHTML = 
    "Resultado: " + resultado;
}
// parsefloat Converte o número decimal.

const botaoGerar = document.getElementById("calcula");
botaoGerar.addEventListener("click", somar );

// ------------------------- //
function produto () {
    let  numero11 = document.getElementById("input1").value;
    let   numero22 = document.getElementById("input2").value;

    numero11 = parseFloat(numero11);
    numero22 = parseFloat(numero22);

    reesultado = numero11 * numero22;

    document.getElementById("Resultadocalculo").innerHTML = "Resultado: "+ reesultado;
}

const produtogerar = document.getElementById("calcula2");
produtogerar.addEventListener("click", produto );

// ----------------- //


function menor () {
    let  numero111 = document.getElementById("input1").value;
    let   numero222 = document.getElementById("input2").value;

    numero111 = parseFloat(numero111);
    numero222 = parseFloat(numero222);
    document.getElementById("Resultadocalculo").innerHTML = resultado = Math.min(numero111, numero222);
}
const menorvalor = document.getElementById("calcula4")
menorvalor.addEventListener("click", menor)

function maior () {
    let numero11 = document.getElementById("input1").value;
    let numero22 = document.getElementById("input2").value;

    numero11 = parseFloat(numero11)
    numero22 = parseFloat(numero22)
    document.getElementById("Resultadocalculo").innerHTML = resultado = Math.max(numero11, numero22)
}

const maiorvalor = document.getElementById("calcula3")
maiorvalor.addEventListener("click", maior)

function media () {
    let numero12= document.getElementById("input1").value;
    let numero21 = document.getElementById("input2").value;

    numero12 = parseFloat(numero12)
    numero21 = parseFloat(numero21)

    document.getElementById("Resultadocalculo").innerHTML = resultado = (numero12 , numero21/ 2)}
const meedia = document.getElementById("media")
meedia.addEventListener("click", media)