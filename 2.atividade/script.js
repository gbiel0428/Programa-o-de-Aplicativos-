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
    let numero1 = parseFloat(document.getElementById("input1").value);
    let numero2 = parseFloat(document.getElementById("input2").value);

    let rminino = numeromin =  Math.min(numero1,numero2)
    let rmaximo = numeromax =  Math.max(numero2, numero1)

    document.getElementById("Resultadocalculo").innerHTML = 
        "Menor número: " + rminimo + " Maior número: " + rmaximo;
    

    const btnMenor = document.getElementById("calcula3");
    btnMenor.addEventListener("click", menor);

}