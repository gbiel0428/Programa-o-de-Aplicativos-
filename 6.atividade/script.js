function aposentar () {
    let matricula = parseFloat(document.getElementById("matricula").value);
    let nascimento = parseFloat(document.getElementById("nascimento").value);
    let trabalho = parseFloat(document.getElementById("trabalho").value);
    let mensagem = "";

    
    
    if  (nascimento <= 1961 || trabalho >= 30 ) {
        document.getElementById("R").innerHTML = mensagem =  "Aposentadoria Permitida" }
        else  {
        document.getElementById("R").innerHTML  = mensagem =  "Aposentadoria Negada"
    }
    document.getElementById("R").innerHTML = `Matricula: ${matricula} , Tempo de Trabalho: ${trabalho} anos , Nasceu em: ${nascimento} , ${mensagem}`
}


const button = document.getElementById("Verificar")
button.addEventListener("click",aposentar)
