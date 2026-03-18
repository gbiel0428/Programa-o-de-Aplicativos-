function Media() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    let media = (nota1 + nota2 + nota3) / 3;

    document.getElementById("Resultadomedia").innerHTML = media.toFixed(2);

    if (media >= 7) {
        document.getElementById("Resultado").innerHTML = "Aprovado";
    } else {
        document.getElementById("Resultado").innerHTML = "Reprovado";
    }
}

const button = document.getElementById("notas");
button.addEventListener("click", Media);