function calcula() {
    let numero = parseFloat(document.getElementById("valor").value);
    let preco_maca = 0;

    if (numero < 12) {
        preco_maca = numero * 1.30;
        document.getElementById("Valormaça").innerHTML = `${preco_maca.toFixed(2)}`;
        document.getElementById("resultado").innerHTML = `${numero}`;
    } else {
        preco_maca = numero * 1.00;
        document.getElementById("Valormaça").innerHTML = `${preco_maca.toFixed(2)}`;
        document.getElementById("resultado").innerHTML = `${numero}`;
    }
}

const button = document.getElementById("calcula");
button.addEventListener("click" , calcula)