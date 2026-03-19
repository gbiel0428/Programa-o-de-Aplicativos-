function NOTA () {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);
    media = (nota1 +  nota2 + nota3) / 3
    let mensagem = "";
    if ((nota1,nota2,nota3)<0 || (nota1,nota2,nota3)>10) {
        document.getElementById("resultado").innerHTML = "!"  }
    else if (media >= 7)
        document.getElementById("resultado").innerHTML = mensagem = "APROVADO"
    else if (media >5 <=6,9 )
        document.getElementById("resultado").innerHTML = mensagem = "Recuperação" 
    else { 
        document.getElementById("resultado").innerHTML = mensagem = "Reprovado"
    }
}

const button = document.getElementById("resultado");
button.addEventListener("click", NOTA);
    
